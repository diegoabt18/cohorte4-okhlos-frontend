import React from 'react'
import { ButtonEscuela, TitlePage } from '../atoms'


const PageOptionsTitle = () => {
    return (
        <div className='flex justify-between'>
            <TitlePage />
            <div>
                <ButtonEscuela />
                <ButtonEscuela />
            </div>


        </div>
    )
}

export default PageOptionsTitle