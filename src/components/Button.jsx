import React from "react";

import magnifier from "../assets/magnifier-svgrepo-com.svg";

const Button = ({ color, border, weight, offWeight, textColor }) => {
  return (
    <div>
      <button
        className={`${
          color ? color : "bg-pink-700"
        }-${weight} active:${color}-${offWeight} ${border} inline-flex focus:outline-none items-center space-x-2 justify-evenly px-4 py-2 rounded-md shadow-md`}
      >
        <img src={magnifier} alt='look' className='h-4 w-4' />
        <p className={`${textColor}`}>Click me</p>
      </button>
    </div>
  );
};

export default Button;
