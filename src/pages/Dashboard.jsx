import React from 'react'
import { CardsInfoGeneral, ImgFase2, Welcome } from '../components/organisms/Index'
import { Icon } from '@iconify/react'

const Dashboard = () => {
    return (
        <div>
             
            <Welcome />
            <CardsInfoGeneral />
            <div className=' '>
                <ImgFase2 />
            </div>

        </div>
    )
}

export default Dashboard