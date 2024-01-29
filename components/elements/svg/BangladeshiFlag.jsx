import React from "react";

const BangladeshiFlag = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 512 512"
      >
        <mask id="a">
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <path fill="#496e2d" d="M0 0h512v512H0z" />
          <circle cx="200.3" cy="256" r="111.3" fill="#d80027" />
        </g>
      </svg>
    </div>
  );
};

export default BangladeshiFlag;
