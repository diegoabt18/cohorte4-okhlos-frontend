import React from 'react'
import Select from 'react-select'

const BasicComboForm = ({text,options}) => {
    return (
        <div>
            <span className=" font-Roboto after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
               {text}
            </span>
            <Select className='' options={options} /> 
        </div>
    )
}

export default BasicComboForm