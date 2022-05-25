import React from 'react'
import { useSelector } from 'react-redux';
import { selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice';
import { Search, ButtonIconText, ButtonLoadDataBasicExcel, BasicComboBox } from '../atoms'
import { ModalAlert } from '../atoms';
import { utils, writeFile } from 'xlsx';
import { selectDataMentorApi } from '../../redux/slices/dataApiMentorSlice';
import { Icon } from '@iconify/react';

const OptionTableAdmin = ({ filter, setFilter, load, text }) => {
    var data = "";

    if (load == "student") {
        data = useSelector(selectDataEstudentApi);
    } else {
        data = useSelector(selectDataMentorApi);
    }



    function exportFile() {
        console.log("Si entre pues")
        if (filter.file) {
            /* convert state to workbook */

            const file = data.columnas.concat(Object.values(filter.data))
            console.log(file)
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
                <BasicComboBox />
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} func={exportFile} />
                <label for="my-modal-3" class="btn hover:bg-PrimarioColor1 hover:text-PrimarioColor3 bg-PrimarioColor2 modal-button text-[1rem] border-none font-bold capitalize font-Roboto text-black pt-5 pb-10">
                    <p className='flex gap-2 items-center' func={exportFile}>
                        <Icon icon={"bi:person-plus"} className='text-[1.2rem] font-bold ' /> {text}
                    </p>
                </label>
            </div>

        </div>
    )
}

export default OptionTableAdmin