import React from "react";
import useLockedBody from "../../hooks/useLockedBody";
import { RiCloseCircleFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import CloseIcon from "./svg/CloseIcon";
import { Link } from "@/navigation";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Drawer = ({
  title,
  children,
  show,
  setShow,
  position,
  className,
  image,
  width,
}) => {
  useLockedBody(show, "root"); // to lock body scroll
  const { isMobile } = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* Backdrop */}
      {show && (
        <div
          className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-30"
          onClick={() => setShow(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={twMerge(
          `fixed top-0 ${position === "left" ? "left-0" : "right-0"} z-40 w-[85vw] lg:max-w-[23rem] h-[100dvh] transition-transform ease-in-out duration-300 transform ${
            show
              ? "translate-x-0"
              : position === "left"
              ? "-translate-x-full"
              : "translate-x-full"
          } bg-white`,
          className
        )}
        tabIndex="-1"
      >
        <div className="relative flex flex-col h-full">
          {/*header*/}
          <div className="flex items-center justify-between px-3 lg:px-3 py-1 lg:py-2 text-slate-900">
            <h3 className="text-lg lg:text-2xl font-title font-semibold line-clamp-1">
              {image && (
                <Link href="/" className="logo w-full ">
                  <Image
                    src={image}
                    alt={"logo"}
                    width={0}
                    height={48}
                    className="h-[48px] w-full  min-h-[48px] mr-[-70px] md:mr-0 py-2 object-contain object-left"
                  />
                </Link>
              )}
              {!image && title ? title : null}
            </h3>
            <button
              className="icon-btn text-2xl text-slate-500"
              onClick={() => setShow(false)}
            >
              <CloseIcon className="hidden lg:block" />
              <RiCloseCircleFill className="lg:hidden" size={33.611} />
            </button>
          </div>
          {/*body*/}
          <div className="overflow-y-auto h-full">
            {children && show ? (
              children
            ) : (
              <p className="text-slate-500 text-lg leading-relaxed">
                This is a regular drawer
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
