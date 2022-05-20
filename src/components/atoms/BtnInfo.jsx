import React from "react";
import { Icon } from "@iconify/react";

const BtnInfo = () => {
  return (
    
      <button
        type="button"
        className="text-black bg-SecondarioColor4  font-medium font-Roboto text-sm  py-2 text-center items-center w-full"
      >
        Mas información
        <Icon icon= "bi:arrow-right-circle-fill" style={{display:'inline', color:'black', marginLeft:'0.5rem' }}/>
        
      </button>
    
  );
};

export default BtnInfo;
