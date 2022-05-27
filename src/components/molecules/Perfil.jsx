import React from 'react'
import PersonName from '../atoms/PersonName'
import PhotoProfile from '../atoms/PhotoProfile'
import Rol from '../atoms/Rol'

const Perfil = () => {
    return (
        <div className='flex flex-col py-2 justify-center items-center bg-PrimarioColor2 p-1'>
            <div className='text-center w-full items-center flex flex-col'> 
                <PhotoProfile w={"60px"} h={"60px"} />
                <PersonName />
                <Rol />
            </div>
        </div>
    )
}

export default Perfil