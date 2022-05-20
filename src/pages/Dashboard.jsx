import React from 'react'
import { CardsInfoGeneral, ImgFase2, Welcome } from '../components/organisms/Index'

const Dashboard = () => {
    return (
        <div>
            <Welcome />
            <CardsInfoGeneral />
            <div className='px-4'>
                <ImgFase2 />
            </div>
        </div>
    )
}

export default Dashboard