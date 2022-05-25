import React from 'react'
import { useSelector } from 'react-redux';
import { selectDataEstudentExcel } from '../../redux/slices/loadDataEstudentSlice';
import { Search, ButtonIconText, ButtonLoadDataBasicExcel, BasicComboBox } from '../atoms'
import { ModalAlert } from '../atoms';
import { utils, writeFile } from 'xlsx';

const OptionTable = ({ filter, setFilter }) => {
    const data = useSelector(selectDataEstudentExcel);


    function exportFile() {
        if (filter.file) {
            /* convert state to workbook */
            const file = data.columnas.concat(filter.data)
            const ws = utils.aoa_to_sheet(file);
            const wb = utils.book_new();
            utils.book_append_sheet(wb, ws, "SheetJS");
            /* generate XLSX file and send to client */
            const namefile = filter.name + ".xlsx";
            writeFile(wb, namefile);
        } else {
            console.log("q paso");
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
                <ButtonIconText text={"Agregar Estudiante"} icon={"bi:person-plus"} func={exportFile} />
            </div>

        </div>
    )
}

export default OptionTable