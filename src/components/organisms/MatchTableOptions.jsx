import React, { useEffect, useState } from "react";
import { BasicComboBox, ButtonIconText } from "../atoms";
import matchServices from "../../api/services/matchServices";

const MatchTableOptions = () => {

 

  return (
    <div className="grid grid-cols-2 justify-between">
      <div className="w-full z-20">
        <BasicComboBox/>
      </div>
      <div className="flex justify-end ">
        <ButtonIconText text={"Realizar Match"} icon={"ic:baseline-group-add"} />
        <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} />
      </div>
    </div>
  );
};

export default MatchTableOptions;
