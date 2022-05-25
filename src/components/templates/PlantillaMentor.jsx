import React, { useEffect, useState } from 'react'
import { Table } from '../organisms/Index'
import { PageOptionsTitle, OptionTable } from '../molecules'
import { ColumnasEstudiantes, TitlePage } from '../atoms'
import { useSelector } from 'react-redux'
import { selectDataMentorExcel } from '../../redux/slices/loadDataMentorSlice'


const PlantillaMentor = () => {

  const data = useSelector(selectDataMentorExcel);
 console.log(data)
 
  const [filter, setFilter]=useState(data);

  return (
    <div className='grid'>
      <div className='pt-6 pb-4'>
        <TitlePage text={"Cargar Datos Mentores"} />
      </div>
      <OptionTable filter={filter.data.length? filter:data} setFilter={setFilter} load={"mentor"} />
      <br />
      <div className='overflow-scroll'>
        <Table data={filter.data.length? filter:data} />
      </div>
    </div>
  )
}

export default PlantillaMentor