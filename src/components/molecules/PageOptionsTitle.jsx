import React from 'react'
import ButtonEscuela from '../atoms/ButtonEscuela'
import TitlePage from '../atoms/TitlePage'

const PageOptionsTitle = ({text}) => {
    return (
        <div className='flex justify-between'>
            <TitlePage text={text} />
            <div>
                <ButtonEscuela />
                <ButtonEscuela />
            </div>


        </div>
    )
}

export default PageOptionsTitle