import React from 'react'
import {ButtonEscuela, TitlePage} from '../atoms'

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