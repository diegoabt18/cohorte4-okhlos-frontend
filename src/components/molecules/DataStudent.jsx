import React, { useState } from 'react'
import {InputNombre, BasicComboForm} from '../atoms'
import {ComboBoxPreferStudent} from './'


const DataStudent = () => {
const [DataForm, setDataForm] = useState ({
    name:"",
    email:"",
    cohorte: null,
    age:null,
    phone:null,
    status:true, 
    gender: ""

}) 
const [multiOption, setMultiopcion] = useState([
    
]
) 

function selectOption (event){
    setDataForm({
        ...DataForm, 
        gender:event.value
    })
}

function selectOptionMulti (event){
        setDataForm({
            ...DataForm, 
            gender:event.value
        })
    }

const handleInputChange = (event) => {
        setDataForm({
        ...DataForm,
        [event.target.name] : event.target.value
    })
}
    const options = [
        { value: 'femenino', label: 'Femenino' },
        { value: 'masculino', label: 'Masculino' },
        { value: 'prefieronodecirlo', label: 'Prefiero no decirlo' }
    ]
    return (
        <div className='grid grid-cols-2 w-full gap-5 sm:grid-cols'>
            <div>
                <InputNombre text={'Nombres y Apellidos'} name={'name'} type={'text'} placeholder={'Escribe Nombres y Apellidos'}/>
            </div>
            <div>
                <InputNombre text={'Email'} name={'email'} type={'email'} placeholder={'Ingresa tu Email'} />
            </div>
            <div>
                <InputNombre text={'Cohorte'} name={'cohorte'} type={'number'} placeholder={'Ingresa Cohorte'} />
            </div>

            <div>
                <InputNombre text={'Edad'} name={'age'} type={'number'} placeholder={'Ingresa tu Edad'} />
            </div>
            <div>
                <InputNombre text={'Teléfono'} name={'phone'} type={'number'} placeholder={'Ingresa tu número telefónico'} />
            </div>
            <div>
               <BasicComboForm func={selectOption} text={'Género'} options={options}/>
            </div>
            <div>
                <ComboBoxPreferStudent setFunc={setMultiopcion} state={ multiOption } text={'Preferencias'} /> 
            </div>
        </div>
    )
}

export default DataStudent