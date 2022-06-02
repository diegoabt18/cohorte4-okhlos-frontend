import React from "react";

const CardInfo = ({text,dato}) => {
  return (
    <div className="flex flex-col items-start p-4 gap-4  ">
      
      <h5 className="text-gray-900 text-base  font-Roboto leading-tight font-medium text-[1.8rem] ">
        {dato}
      </h5>
      <p className="text-gray-700 text-base font-GilroyLight">
        {text}
      </p>
    </div>
  );
};

export default CardInfo;
