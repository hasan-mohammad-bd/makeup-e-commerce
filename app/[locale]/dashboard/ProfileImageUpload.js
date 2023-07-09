import Image from "next/image";
import { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import profileAvatar from "@/public/assets/images/profile_avatar.png";

const ProfileImageUpload = () => {
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
    <div className="relative w-32 h-32 mb-16 mt-8">
      <div className="w-32 h-32 relative rounded-full bg-gray-200">
        {/* {image ? ( */}
        <Image
          src={image || profileAvatar}
          alt="Profile"
          height={128}
          width={128}
          className="w-full h-full rounded-full"
        />
        {/* ) : null} */}
        <label
          htmlFor="image-upload"
          className="absolute bottom-0 right-0 w-9 h-9 bg-primary rounded-full flex items-center justify-center cursor-pointer border-2 border-white"
        >
          <BsCameraFill className="text-white" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="image-upload"
            className="hidden"
          />
        </label>
      </div>
      <h3 className="text-center mt-3 text-slate-500">প্রফাইল ফটো</h3>
    </div>
  );
};

export default ProfileImageUpload;
