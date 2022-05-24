import React from "react";
import { BasicComboBox, ButtonIconText } from "../atoms";

const MatchTableOptions = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="w-full">
        <BasicComboBox />
      </div>
      <div className="flex justify-between">
        <ButtonIconText />
        <ButtonIconText />
      </div>
    </div>
  );
};

export default MatchTableOptions;
