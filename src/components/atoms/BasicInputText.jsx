import React from 'react'

const BasicInputText = () => {
    return (
        <div className="mb-6 " >
            <input 
                type="email" 
                id="email" 
                placeholder="CAMBIAR ESTE TEXTO MAIL" 
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