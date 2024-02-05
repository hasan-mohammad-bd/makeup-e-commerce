import React from "react";

const CountButton = ({ isActive, label, count, ...props }) => {
  return (
    <button
      className={`flex items-center gap-2 border py-2 px-4 capitalize ${
        isActive
          ? "border-primary text-slate-900"
          : "border-slate-300 text-slate-500"
      }`}
      {...props}
    >
      <div
        className={` h-5 w-5 text-[14px] flex justify-center items-center ${
          isActive ? "bg-primary text-white" : "bg-slate-300"
        }`}
      >
        <p>{count || 0}</p>
      </div>
      {label}
    </button>
  );
};

export default CountButton;
