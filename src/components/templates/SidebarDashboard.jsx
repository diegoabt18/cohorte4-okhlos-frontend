import React from 'react'
import MenuCabeceraDesktop from '../organisms/MenuCabeceraDesktop'
import MenuDesktop  from '../organisms/MenuDesktop'

const SidebarDashboard = () => {
    return (
        <div className='w-[15rem] '>
            <MenuCabeceraDesktop />
            <MenuDesktop />
        </div>
    )
}

export default SidebarDashboard