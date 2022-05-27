import React from 'react'
import BasicButton from '../atoms/BasicButton'
import TextInfoDashBoard  from '../atoms/TextInfoDashBoard'

const DashboardOptions = () => {
  return (
    <div className='grid grid-cols-2 p-4 '>
      <div >
        <TextInfoDashBoard />

      </div>
      <div className='flex gap-x-4 justify-end items-start pr-4 pt-4'  >
        <BasicButton text={"Programate"} />
        <BasicButton text={"Proyectate"} />
      </div>
    </div>
  )
}

export default DashboardOptions