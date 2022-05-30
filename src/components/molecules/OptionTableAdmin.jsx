import React from 'react'
import { useSelector } from 'react-redux';
import { selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice';
import { utils, writeFile } from 'xlsx';
import { selectDataMentorApi } from '../../redux/slices/DataApiMentorSlice';
import { Icon } from '@iconify/react';
import {ModalAlert, Search, ButtonIconText,BasicComboBox} from '../atoms';


const OptionTableAdmin = ({ filter, setFilter, load, text, func }) => {
    var data = "";

    if (load == "student") {
        data = useSelector(selectDataEstudentApi);
    } else {
        data = useSelector(selectDataMentorApi);
    }

    function exportFile() {
        
        if (filter.file) {
            /* convert state to workbook */

            const file = data.columnas.concat(Object.values(filter.data))
            
            const ws = utils.aoa_to_sheet(file);
            const wb = utils.book_new();
            utils.book_append_sheet(wb, ws, "SheetJS");
            /* generate XLSX file and send to client */
            const namefile = filter.name + ".xlsx";
            writeFile(wb, namefile);
        } else {
            ModalAlert("Error al descargar archivo", "No se encontraron datos para descargar", "error")
        }

    }

    return (
        <div className='flex justify-between items-center'>
            <div>
                <Search datos={data} setFilter={setFilter} />
            </div>
            <div className='flex gap-2'>
                <BasicComboBox func={func} data={data} load={load} />
                <label htmlFor="my-modal-3" className="btn hover:bg-PrimarioColor1 hover:text-PrimarioColor5 bg-PrimarioColor2 modal-button text-[1rem] border-none font-bold capitalize font-Roboto text-black pt-5 pb-10">
                    <div className='flex gap-2 items-center'>
                        <Icon icon={"bi:person-plus"} className='text-[1.2rem] font-bold ' /> {text}
                    </div>
                    
                </label>
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} func={exportFile} />
            </div>

        </div>
    )
}

export default OptionTableAdmin