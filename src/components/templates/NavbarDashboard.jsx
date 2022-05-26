import React from 'react'
import ContenedorPerfil from '../organisms/ContenedorPerfil'
import BasicButtonIcon from '../atoms/BasicButtonIcon'

const NavbarDashboard = () => {
    return (
        <div className='flex justify-end shadow-xl px-3'>
            <div className='flex items-end justify-end '>
            <ContenedorPerfil />
            </div>
        </div>
    )
}

export default NavbarDashboard

