"use client";
import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "@/components/elements/Modal";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  // WhatsappShareButton,
} from "react-share";
import { HiShare } from "react-icons/hi2";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { toast } from "react-toastify";
import { FaFacebookF, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function SocialShare({ translations = {} }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentUrl, setCurrentUrl] = useState("");
  // const [isActive, setIsActive] = useState(false);
  const socialShareRef = useRef(null);

  /* 	useEffect(() => {
		// Get the current page URL and update the state
		setCurrentUrl(window.location.href);

		// Add event listener to handle outside click
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			// Remove the event listener when the component unmounts
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []); */

  /* 	const handleClickOutside = (event) => {
		if (
			socialShareRef.current &&
			!socialShareRef.current.contains(event.target)
		) {
			// Click is outside the popover, so close it
			setIsActive(false);
		}
	}; */

  const pageContent = (
    <div className="flex items-center">
      <h3 className="font-semibold whitespace-nowrap">
        {translations["share"] || "শেয়ার করুন"}:
      </h3>
      <div
        className={` flex items-center justify-start w-full  lg:px-4 text-slate-500`}
      >
        <FacebookShareButton
          url={currentUrl}
          className="flex items-center flex-col mr-2 md:flex-row gap-3 my-3 hover:bg-amber-50"
        >
          <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center bg-primary hover:bg-hovercolor">
            <FaFacebookF url={currentUrl} className="text-white" size={18} />
          </div>
        </FacebookShareButton>

        <TwitterShareButton
          url={currentUrl}
          className="flex flex-col md:flex-row mr-2 items-center gap-3 my-3 hover:bg-amber-50"
        >
          <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center bg-primary hover:bg-hovercolor">
            <FaTwitter url={currentUrl} className="text-white" size={18} />
          </div>
        </TwitterShareButton>
        <EmailShareButton
          url={currentUrl}
          className="flex items-center flex-col mr-2 md:flex-row gap-3 my-3 hover:bg-amber-50"
        >
          <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center bg-primary hover:bg-hovercolor">
            <MdOutlineEmail url={currentUrl} className="text-white" size={18} />
          </div>
        </EmailShareButton>
        <LinkedinShareButton
          url={currentUrl}
          className="flex flex-col md:flex-row mr-2 items-center gap-3 my-3 hover:bg-amber-50"
        >
          <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center bg-primary hover:bg-hovercolor">
            <FaLinkedin url={currentUrl} className="text-white" size={18} />
          </div>
        </LinkedinShareButton>
        <PinterestShareButton
          url={currentUrl}
          className="flex flex-col md:flex-row items-center mr-2 gap-3 my-3 hover:bg-amber-50"
        >
          <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center bg-primary hover:bg-hovercolor">
            <FaPinterest  url={currentUrl} className="text-white" size={18} />
          </div>
        </PinterestShareButton>
      </div>
    </div>
  );

  return (
    <div className="">
      <span className="flex ">{pageContent}</span>
    </div>
  );
}
