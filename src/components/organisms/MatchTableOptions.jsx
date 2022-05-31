import React, { useEffect, useState } from "react";
import {BasicComboBox, ButtonIconText} from "../atoms";
import matchServices from "../../api/services/matchServices";

const MatchTableOptions = () => {

    return (
        <div className="
            flex
            flex-col
            items-center
            justify-center
            gap-5
            pt-5
            md:flex-row
            md:justify-between
        ">
            <div className="">
                <BasicComboBox/>
            </div>
            <div className="
                flex-col
                gap-3
                md:flex-row
            ">
                <ButtonIconText text={"Realizar Match"} icon={"ic:baseline-group-add"} />
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} />
            </div>
        </div>
    );
};

export default MatchTableOptions;
