import React from "react";
import TitleAddEstudiante from "../atoms/TitleAddEstudiante";
import XCloseBtn from "../atoms/XCloseBtn";

const AddStudent = () => {
  return (
    <div className="flex bg-PrimarioColor2 justify-between">
      <TitleAddEstudiante />
      <XCloseBtn />
    </div>
  );
};

export default AddStudent;
