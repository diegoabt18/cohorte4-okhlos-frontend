import React from 'react'

const BasicInputText = ({ placeholder, name, func, type }) => {
    return (
        <div className="mb-6 " >
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={func}
                required
                className="
                    border-b-2
                    divide-y
                    text-sm 
                    block 
                    w-full 
                    p-2.5 
                    border-y-black
                    dark:text-black
                    outline-none
                "
            />
        </div>
    )
}

export default BasicInputText