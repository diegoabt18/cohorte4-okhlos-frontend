import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {BasicComboBox, ButtonIconText} from "../atoms";
import matchServices from "../../api/services/matchServices";
import { selectDataEstudentApi } from "../../redux/slices/DataApiEstudentSlice";
import { ModalUpdate } from "../molecules";
import { FormMatch } from "../molecules";


const MatchTableOptions = ({func, funcMatch}) => {
    const [open,setopen] = useState(false) 
    const data = useSelector(selectDataEstudentApi)
    function openmodal(){
        setopen(true) 
    }

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
            <ModalUpdate state={open} setState={setopen}>
            <FormMatch func={func} data={data}/>
            </ModalUpdate>
            <div className="">
                <BasicComboBox func={func} load={"student"} data={data} />
            </div>
            <div className="
                flex
                flex-col
                gap-3
                md:flex-row
            ">
                <ButtonIconText text={"Realizar Match"} icon={"clarity:group-solid"} func={funcMatch} />
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"}  />
                <ButtonIconText text={"Match Individual"} icon={"material-symbols:group-add-rounded"} func={openmodal}  />
            </div>
        </div>
    );
};

export default MatchTableOptions;
