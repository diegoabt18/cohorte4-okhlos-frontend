import React from "react";
import { BasicComboBox, ButtonIconText } from "../atoms";

const MatchTableOptions = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="w-full">
        <BasicComboBox />
      </div>
      <div className="flex justify-around">
        <ButtonIconText text={"Cargar Datos"} icon={"akar-icons:cloud-upload"} />
        <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} />
      </div>
    </div>
  );
};

export default MatchTableOptions;
