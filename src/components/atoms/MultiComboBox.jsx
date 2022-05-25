import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const MultiComboBox = ({text}) => {
    
    const options = [
        { value: 'react', label: 'React' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'ia', label: 'IA'},
        { value: 'python', label: 'Python'},
        { value: 'frontend', label: 'Frontend'},
        { value: 'backend', label: 'Backend'}
    ]

    return (
        <div>
            <span className=" font-Roboto after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
               {text}
            </span>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                //defaultValue={[colourOptions[4], colourOptions[5]]}
                isMulti
                options={options}
                
            />
        </div>

    )
}

export default MultiComboBox




