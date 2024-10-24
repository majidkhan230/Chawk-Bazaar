import React from "react";

const CompCard = ({ data }) => {
  const { title, subtitle, btnText, boxColor, image } = data;
  return (
    <div
      style={{ backgroundColor: boxColor }}
      className="w-full md:w-1/2 h-64 rounded-md border p-4 md:p-10 drop-shadow-md relative flex items-center"
    >
      <div className="uppercase z-10">
        <h1 className="text-lg md:text-xl font-medium">{title}</h1>
        <h2 className="text-sm md:text-base">{subtitle}</h2>
        <button className="mt-2 ">{btnText}</button>
      </div>
      <img
        src={image}
        className="object-contain w-full h-full absolute top-0 left-0 z-0"
        alt=""
      />
    </div>
  );
};

export default CompCard;
