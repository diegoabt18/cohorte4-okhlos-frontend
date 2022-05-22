import React from 'react'
import Select from 'react-select'

const BasicComboBox = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    
    return (
        <Select className='w-[200px]' options={options} />
    )
}

export default BasicComboBox