import React from 'react'

const BasicButton = ({text, func}) => {
    return (
        <button className="
            bg-PrimarioColor2 
            text-PrimarioColor5 
            hover:bg-PrimarioColor1 
            hover:text-PrimarioColor5 
            font-Roboto 
            font-bold  
            py-2 
            px-4 
            rounded"
            type='buttom'
            onClick={func}
        >
            {text}
        </button>
    )
}

export default BasicButton