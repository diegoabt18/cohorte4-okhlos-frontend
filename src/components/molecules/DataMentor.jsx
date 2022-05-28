import React from 'react'
import {InputNombre, InputDate, BasicComboForm } from '../atoms'
import {ComboBoxPreferStudent} from './'

const DataMentor = () => {

    const options = [
        { value: 'femenino', label: 'Femenino' },
        { value: 'masculino', label: 'Masculino' },
        { value: 'prefieronodecirlo', label: 'Prefiero no decirlo' }
    ]

    return (
        <div className='grid grid-cols-2 w-full gap-5 sm:grid-cols'>
            <div>
                <InputNombre text={'Nombres'} type={'text'} placeholder={'Escribe el nombres(s)'} />
            </div>
            <div>
                <InputNombre text={'Apellidos'} type={'text'} placeholder={'Escribe el apellido(s)'} />
            </div>
            <div>
                <InputDate text={'Fecha de Nacimiento'} type={'date'} placeholder={'Fecha de nacimiento'} />
            </div>
            <div>
               <BasicComboForm text={'Género'} options={options} />
            </div>
            <div>
                <ComboBoxPreferStudent text={'Género'} />
            </div>
            <div>
                <InputNombre text={'Telefono'}  type={'number'} placeholder={'Escribe el telefóno'}  />
            </div>
            <div>
                <InputNombre text={'Correo electrónico'} type={'email'} placeholder={'Escribe el correo electrónico'} />
            </div>

        </div>
    )
}

export default DataMentor