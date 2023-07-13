import Image from "next/image";
import { useState } from "react";

const Backup = ({ register, errors }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
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
              ব্রাউজ করুন
            </span>
            <input
              type="file"
              accept="image/*"
              // onChange={handleImageUpload}
              id="image-upload"
              name="image"
              className="hidden"
              {...register("image", {
                required: "Image is required.",
                validate: {
                  fileType: (value) => {
                    // Check the file type
                    const allowedTypes = [
                      "image/jpg",
                      "image/jpeg",
                      "image/png",
                    ];
                    const fileType = value && value[0] && value[0].type;
                    return allowedTypes.includes(fileType);
                  },
                  fileSize: (value) => {
                    // Check the file size (in bytes)
                    const maxSize = 2 * 1024 * 1024; // 2MB
                    const fileSize = value && value[0] && value[0].size;
                    return fileSize <= maxSize;
                  },
                },
                keepOriginalHandlers: true,
                onChange: handleImageUpload,
              })}
            />
          </label>
          <h3 className="text-slate-500">অথবা, ফাইল টেনে এনে এখানে ছাড়ুন</h3>
        </div>
      </div>
      {image && (
        <div className="w-h-16 h-16 mt-3">
          <Image
            src={image}
            alt="Profile"
            height={64}
            width={64}
            sizes="100vh"
            className="object-cover h-full rounded-lg"
          />
        </div>
      )}
      {errors.image && (
        <ul>
          {errors.image.type === "required" && (
            <li className="errorMsg">{errors.image.message}</li>
          )}
          {errors.image.type === "fileType" && (
            <li className="errorMsg">
              Invalid file type. Please choose a JPE, JPEG, or PNG image.
            </li>
          )}
          {errors.image.type === "fileSize" && (
            <li className="errorMsg">
              File size exceeds the allowed limit of 2MB.
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Backup;
