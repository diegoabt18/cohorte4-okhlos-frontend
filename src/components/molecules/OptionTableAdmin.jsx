import React from 'react'
import { useSelector } from 'react-redux';
import { selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice';
import { utils, writeFile } from 'xlsx';
import { selectDataMentorApi } from '../../redux/slices/DataApiMentorSlice';
import { Icon } from '@iconify/react';
import {ModalAlert, Search, ButtonIconText,BasicComboBox} from '../atoms';


const OptionTableAdmin = ({ filter, setFilter, load, text, func, setOpen }) => {
    var data = "";

    if (load == "student") {
        data = useSelector(selectDataEstudentApi);
    } else {
        data = useSelector(selectDataMentorApi);
    }

    function openModal() {
        setOpen(true)
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
        <div className='
            flex 
            flex-col
            justify-between 
            items-center
            gap-4
            lg:flex-row
        '>
            <div>
                <Search datos={data} setFilter={setFilter} />
            </div>
            <div className='
                flex
                flex-col
                gap-4
                justify-center
                sm:flex-row
            '>
                
                {load== "student"? <BasicComboBox func={func} data={data} load={load} /> :''  }
                <ButtonIconText text={text} icon={"bi:person-plus"} func={openModal} />
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} func={exportFile} />
            </div>

        </div>
    )
}

export default OptionTableAdmin