import React from 'react'
import { CardsInfoGeneral, ImgFase2, Welcome } from '../components/organisms/Index'
import { Icon } from '@iconify/react'

const Dashboard = () => {
    return (
        <div>
            <div className='flex'>
            <Icon className=' text-[4rem]' icon={"eos-icons:bubble-loading"}/> 
            Loading Data
            </div>    
            <Welcome />
            <CardsInfoGeneral />
            <div className=' '>
                <ImgFase2 />
            </div>

        </div>
    )
}

export default Dashboard