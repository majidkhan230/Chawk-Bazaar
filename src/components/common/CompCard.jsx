import React from "react";

const CompCard = ({ data }) => {
 // console.log(data.boxColor);
  const { title, subtitle, btnText, boxColor,image } = data;
  return (
    <div className={`bg-[${boxColor}] w-1/2  h-64 rounded-md  border p-10  drop-shadow-md relative flex items-center `}>
      <div className="uppercase ">
        <h1 className="text-xl  font-medium">{title}</h1>
        <h2>{subtitle}</h2>
        <button>{btnText}</button>
      </div>
      <img src={image} className="object-contain top-0 w-full h-full absolute" alt="" />
    </div>
  );
};

export default CompCard;
