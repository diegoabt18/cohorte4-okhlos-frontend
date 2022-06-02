import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {BasicComboBox, ButtonIconText} from "../atoms";
import matchServices from "../../api/services/matchServices";
import { selectDataEstudentApi } from "../../redux/slices/DataApiEstudentSlice";


const MatchTableOptions = ({func}) => {
const data = useSelector(selectDataEstudentApi)

    return (
        <div className="
            flex
            flex-col
            items-center
            justify-center
            gap-5
            pt-5
            md:flex-row
            md:justify-between">
            <div className="">
                <BasicComboBox func={func} load={"student"} data={data} />
            </div>
            <div className="
                flex-col
                gap-3
                md:flex-row">

                <ButtonIconText text={"Realizar Match"} icon={"ic:baseline-group-add"} />
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} />
            </div>
        </div>
    );
};

export default MatchTableOptions;
