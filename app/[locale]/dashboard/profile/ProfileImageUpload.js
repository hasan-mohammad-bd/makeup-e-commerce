import Image from "next/image";
import { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import profileAvatar from "@/public/assets/images/profile_avatar.png";
import { useSelector } from "react-redux";

const ProfileImageUpload = ({
	profileImageFile,
	setProfileImageFile,
	editMode,
	user,
}) => {
	const [validationError, setValidationError] = useState("");
	const { translations } = useSelector((state) => state.common);
	const ValidateImage = (file) => {
		const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
		const maxSize = 5 * 1024 * 1024; // 5MB

		if (!allowedExtensions.test(file.name)) {
			return "Only JPG, JPEG, and PNG files are allowed.";
		}
		if (file.size > maxSize) {
			return "File size exceeds the maximum limit of 5MB.";
		}

		return "";
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const validationError = ValidateImage(file);
		if (validationError) {
			setValidationError(validationError);
			return;
		}
		setProfileImageFile(file);
		if (file) setValidationError("");
	};

	return (
		<div className="mb-12 lg:mb-14">
			<div className="w-[5rem] lg:w-[6.5rem] h-[5rem] lg:h-[6.5rem] relative rounded-full bg-gray-200">
				<Image
					src={
						profileImageFile
							? URL.createObjectURL(profileImageFile)
							: null || user?.image || profileAvatar
					}
					alt="Profile"
					height={128}
					width={128}
					className="w-full h-full rounded-full"
				/>
				{editMode && (
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
				)}
				<h3 className="text-center my-3 text-sm text-slate-500 whitespace-nowrap">
					{translations["profile-photo"] || "Profile Photo"}
				</h3>
			</div>
			{validationError && editMode && (
				<div className="text-red-500 mt-12">{validationError}</div>
			)}
		</div>
	);
};

export default ProfileImageUpload;
