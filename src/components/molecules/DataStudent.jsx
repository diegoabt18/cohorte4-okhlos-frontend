import React from 'react'
import { InputNombre, InputDate, BasicComboBox, } from '../atoms'
import BasicComboForm from '../atoms/BasicComboForm'
import ComboBoxPreferStudent from './ComboBoxPreferStudent'

const DataStudent = () => {

    const options = [
        { value: 'femenino', label: 'Femenino' },
        { value: 'masculino', label: 'Masculino' },
        { value: 'prefieronodecirlo', label: 'Prefiero no decirlo' }
    ]

    return (
        <div className='grid grid-cols-2 w-full gap-5 sm:grid-cols'>
            <div>
                <InputNombre text={'Nombres'}/>
            </div>
            <div>
                <InputNombre text={'Apellidos'} />
            </div>
            <div>
                <InputDate text={'Fecha de Nacimiento'} />
            </div>
            <div>
               <BasicComboForm text={'Género'} options={options} />
            </div>
            <div>
        
                <ComboBoxPreferStudent text={'Género'} />
            </div>
        </div>
    )
}

export default DataStudent