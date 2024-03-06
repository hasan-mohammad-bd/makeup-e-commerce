import Image from "next/image";
import React, { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const TicketImagesUploadMobile = ({ setImageFiles }) => {
  const { translations } = useSelector((state) => state.common);
  const [images, setImages] = useState([]);
  const [validationError, setValidationError] = useState("");

  const validateImages = (files) => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    const maxSize = 5 * 1024 * 1024; // 5MB

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!allowedExtensions.test(file.name)) {
        return "Only JPG, JPEG, and PNG files are allowed.";
      }
      if (file.size > maxSize) {
        return "File size exceeds the maximum limit of 5MB.";
      }
    }

    return "";
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = [];

    const validationError = validateImages(files);
    if (validationError) {
      setValidationError(validationError);
      return;
    }

    setImageFiles(files); // getting images files to pass it to backend

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          imagesArray.push(reader.result);
          if (imagesArray.length === files.length) {
            setImages(imagesArray);
            setValidationError("");
          }
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="flex gap-4 mt-2 lg:mt-3">
        {images.length > 0 &&
          images.map((image, index) => (
            <div
              key={index}
              className="w-[72px] lg:w-[88px] h-[72px] lg:h-[88px]"
            >
              <Image
                src={image}
                alt={`Image ${index}`}
                height={96}
                width={96}
                className="object-cover h-full rounded-lg"
              />
            </div>
          ))}

        <label
          htmlFor={`image-upload`}
          className="w-[72px] lg:w-[88px] h-[72px] lg:h-[88px] py-2 px-1 text-center border-2 border-dashed border-slate-300 rounded-lg cursor-pointer text-slate-500"
        >
          <BsCameraFill size={24} />
          <p className="text-[10px]/[14px] lg:text-sm/[100%] mt-1 lg:mt-2">
            {translations["upload-image"] || "Upload Image"}
          </p>
          <input
            type="file"
            accept="image/*"
            id={`image-upload`}
            name="image"
            className="hidden"
            multiple
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {validationError && (
        <div className="text-red-500 mt-2">{validationError}</div>
      )}

    </>
  );
};

export default TicketImagesUploadMobile;
