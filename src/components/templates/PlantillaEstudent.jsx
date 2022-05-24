import React, { useState } from 'react'
import { Table } from '../organisms/Index'
import { PageOptionsTitle, OptionTable } from '../molecules'
import { TitlePage } from '../atoms'
import { useSelector } from 'react-redux'
import { selectDataEstudentExcel } from '../../redux/slices/loadDataEstudentSlice'


const PlantillaEstudent = () => {

  const data = useSelector(selectDataEstudentExcel);
 console.log(data)

  const [filter, setFilter]=useState(data);

  return (
    <div className='grid'>
      <div className='pt-6 pb-4'>
        <TitlePage text={"Cargar Datos Estudiantes"} />
      </div>
      <OptionTable filter={filter.data.length? filter:data} setFilter={setFilter} load={"student"} />
      <br />
      <div className='overflow-scroll'>
        <Table data={filter.data.length? filter:data} />
      </div>
    </div>
  )
}

export default PlantillaEstudent