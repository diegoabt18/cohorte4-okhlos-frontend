import React from 'react'
import ContenedorPerfil from '../organisms/ContenedorPerfil'
import BasicButtonIcon from '../atoms/BasicButtonIcon'

const NavbarDashboard = () => {
    return (
        <div className='flex justify-between shadow-xl px-3 '>
            <BasicButtonIcon  icon={'ic:round-menu'} color={'Black'} />
            <ContenedorPerfil />
        </div>
    )
}

export default NavbarDashboard