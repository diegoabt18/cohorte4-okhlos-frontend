import React from 'react'
import CardsInfoGeneral from '../components/organisms/CardsInfoGeneral'
import ImgFase2 from '../components/organisms/ImgFase2'
import Welcome  from '../components/organisms/Welcome'

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