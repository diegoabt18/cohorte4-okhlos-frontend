import React from 'react'
import AdminWithName from '../molecules/AdminWithName'
import LogoMenuSidebar from '../atoms/LogoMenuSidebar'
import PhotoProfile  from '../atoms/PhotoProfile'

const MenuCabeceraDesktop = () => {
  return (
    <div className='bg-PrimarioColor2'>
      <div className='px-4 pt-1'>
        <LogoMenuSidebar />
      </div>
      
      <div className='flex items-center justify-center  gap-2'>
        <PhotoProfile w={"40px"} h={"40px"} />
        <AdminWithName />
      </div>


    </div>




  )
}

export default MenuCabeceraDesktop