import React, { Fragment, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";

const ComponentsView = () => {
  const colors = [
    "bg-green",
    "bg-blue",
    "bg-yellow",
    "bg-gray",
    "bg-indigo",
    "bg-pink",
    "bg-teal",
    "bg-sky",
  ];
  // const colors = {
  //   green: "bg-green",
  //   blue: "bg-blue",
  //   yellow: "bg-yellow",
  //   gray: "bg-gray",
  //   indigo: "bg-indigo",
  // };
  const weight = "500";
  const offWeight = "600";
  const border = "rounded-lg";
  const textColor = "";

  const [color, setColor] = useState(`${colors[0]}`);

  // console.log(color);

  const handleColor = (color) => {
    // console.log(color);
    setColor(color);
  };

  return (
    <Fragment>
      <div className='px-8 pt-8'>Components</div>
      <div className='inline-flex space-x-2 px-8 py-8'>
        {colors.map((color) => (
          <div
            className={`rounded-full h-6 w-6 border ${color}-${weight}`}
            onClick={() => handleColor(color)}
          ></div>
        ))}
        {/* <div
          className={`rounded-full h-6 w-6 border ${colors[0]}-${weight}`}
          onClick={() => handleColor(colors[0])}
        ></div>
        <div
          className={`rounded-full h-6 w-6 border ${colors[1]}-${weight}`}
          onClick={() => handleColor(colors[1])}
        ></div>
        <div
          className={`rounded-full h-6 w-6 border ${colors[2]}-${weight}`}
          onClick={() => handleColor(colors[2])}
        ></div>
        <div
          className={`rounded-full h-6 w-6 border ${colors[3]}-${weight}`}
          onClick={() => handleColor(colors[3])}
        ></div>
        <div
          className={`rounded-full h-6 w-6 border ${colors[4]}-${weight}`}
          onClick={() => handleColor(colors[4])}
        ></div> */}
        {/* <div className='rounded-full bg-blue-500 h-6 w-6 border'></div>
        <div className='rounded-full bg-yellow-500 h-6 w-6 border'></div>
        <div className='rounded-full bg-red-500 h-6 w-6 border'></div>
        <div className='rounded-full bg-gray-500 h-6 w-6 border'></div>
        <div className='rounded-full bg-indigo-600 h-6 w-6 border'></div>  */}
      </div>
      {/* <div className='px-8 pt-8'>
        <Button
          color={color}
          weight={weight}
          offWeight={offWeight}
          border={border}
          textColor={textColor}
        />
      </div> */}
      <div className='px-8 py-8'>
        <Form
          button={
            <Button
              color={color}
              weight={weight}
              offWeight={offWeight}
              border={border}
              textColor={textColor}
            />
          }
        />
      </div>
    </Fragment>
  );
};

export default ComponentsView;
