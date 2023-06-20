import React from "react";

const CountButton = ({ isActive, label, count, ...props }) => {
  return (
    <button
      className={`flex-center gap-2 border rounded-lg py-2 px-4 ${
        isActive
          ? "border-primary text-slate-900"
          : "border-slate-300 text-slate-500"
      }`}
      {...props}
    >
      <div
        className={`rounded-md px-2 ${
          isActive ? "bg-primary text-white" : "bg-slate-300"
        }`}
      >
        {count || 0}
      </div>
      {label}
    </button>
  );
};

export default CountButton;
