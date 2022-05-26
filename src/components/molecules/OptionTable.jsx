import React from 'react'
import { useSelector } from 'react-redux';
import { selectDataEstudentExcel } from '../../redux/slices/loadDataEstudentSlice';
import { selectDataMentorExcel } from '../../redux/slices/loadDataMentorSlice';
import { Search, ButtonIconText, ButtonLoadDataBasicExcel } from '../atoms'
import { ModalAlert } from '../atoms';
import { utils, writeFile } from 'xlsx';
import studentServices from '../../api/services/studentServices'

const OptionTable = ({filter, setFilter, load}) => {
    var data = "";
    
   if (load=="student"){
       data=useSelector(selectDataEstudentExcel);
   }else {
    data=useSelector(selectDataMentorExcel);
   }


    function exportFile() {
        if (filter.file) {
            /* convert state to workbook */
            const file=data.columnas.concat(filter.data)
            const ws = utils.aoa_to_sheet(file);
            const wb = utils.book_new();
            utils.book_append_sheet(wb, ws, "SheetJS");
            /* generate XLSX file and send to client */
            const namefile=filter.name+".xlsx";
            writeFile(wb, namefile);
        }else{
            console.log("q paso");
            ModalAlert("Error al descargar archivo","No se encontraron datos para descargar","error")
        }

    }

    function insertData(){
       
        studentServices.registerAll(data)
    }

    return (
        <div className='flex justify-between items-center'>
            <div>
                <Search datos={data} setFilter={setFilter}/>
            </div>
            <div className='flex'>
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} func={exportFile}/>
                <ButtonLoadDataBasicExcel load={load} />
                <ButtonIconText text={"Guardar Datos"} icon={"fluent:save-16-regular"} func={insertData} />
                
            </div>

        </div>
    )
}

export default OptionTable