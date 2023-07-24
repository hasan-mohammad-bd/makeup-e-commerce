import React from "react";
import { twMerge } from "tailwind-merge";

const DescriptionViewer = ({ details, className }) => {
  return details ? (
    <div
      className={twMerge("prose max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: details }}
    />
  ) : (
    <p className="py-2 text-slate-300">Not Available</p>
  );
};

export default DescriptionViewer;
