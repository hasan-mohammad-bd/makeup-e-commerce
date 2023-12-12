import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const TicketImagesUpload = ({ setImageFiles }) => {
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
      <div
        className="p-4 img-uploader min-h-[72px] flex items-center border-2 border-dashed border-slate-300 rounded-lg"
        onDrop={(e) => {
          e.preventDefault();
          handleImageUpload({ target: { files: e.dataTransfer.files } });
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-wrap gap-4 items-center">
          <label htmlFor="image-upload">
            <span className="border border-slate-300 rounded-lg py-2 px-4 cursor-pointer">
            {translations["browse"] || "ব্রাউজ করুন"}
            </span>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              name="image"
              className="hidden"
              multiple
              onChange={handleImageUpload}
            />
          </label>
          <h3 className="text-slate-500">{translations["or,-drag-and-drop-files-here"] || "অথবা, ফাইল টেনে এনে এখানে ছাড়ুন"}</h3>
        </div>
      </div>
      {validationError && (
        <div className="text-red-500 mt-2">{validationError}</div>
      )}
      {images.length > 0 && (
        <div className="flex gap-4 mt-3">
          {images.map((image, index) => (
            <div key={index} className="w-16 h-16">
              <Image
                src={image}
                alt={`Image ${index}`}
                height={64}
                width={64}
                className="object-cover h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TicketImagesUpload;
