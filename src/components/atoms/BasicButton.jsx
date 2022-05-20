import React from 'react'

const BasicButton = ({text}) => {
    return (
        <button className="
            bg-PrimarioColor2 
            text-PrimarioColor5 
            hover:bg-PrimarioColor1 
            hover:text-PrimarioColor3 
            font-Roboto 
            font-bold  
            py-2 
            px-4 
            rounded"
        >
            {text}
        </button>
    )
}

export default BasicButton