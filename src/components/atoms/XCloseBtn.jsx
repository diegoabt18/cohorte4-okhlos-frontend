import React from "react";
import { Icon } from "@iconify/react";

const XCloseBtn = () => {
  return (
    <button
      type="button"
      className=" bg-transparent hover:bg-PrimarioColor1"
    >
      <Icon icon="bx:x" style={{color:'black', width:'25px', height:'25px' }}/>
    </button>
  );

};

export default XCloseBtn;
