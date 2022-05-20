import React from 'react'
import { Search, ButtonIconText, ButtonLoadDataExcel } from '../atoms'

const OptionTable = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <Search />
            </div>
            <div className='flex'>
                <ButtonIconText text={"Descargar"} icon={"healthicons:excel-logo"} />
                <ButtonIconText text={"Cargar Datos"} icon={"akar-icons:cloud-upload"} />
                <ButtonIconText text={"Guardar Datos"} icon={"fluent:save-16-regular"} />
            </div>

        </div>
    )
}

export default OptionTable