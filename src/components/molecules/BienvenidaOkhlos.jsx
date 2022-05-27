import React from 'react'
import ImgBienvenidaAdmin from '../atoms/ImgBienvenidaAdmin'
import TextBienvenidaDashboard from '../atoms/TextBienvenidaDashboard'

const BienvenidaOkhlos = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex items-center justify-center'>
        <TextBienvenidaDashboard />
      </div>
      <div className='flex items-center justify-center'>
        <ImgBienvenidaAdmin />

      </div>


    </div>
  )
}

export default BienvenidaOkhlos