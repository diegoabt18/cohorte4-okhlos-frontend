import React, { useState } from 'react'
import { Table } from '../organisms/Index'
import { PageOptionsTitle, OptionTable } from '../molecules'
import { TitlePage } from '../atoms'
import { useSelector } from 'react-redux'
import { selectDataExcel } from '../../redux/slices/loadDataSlice'


const PlantillaEstudent = () => {

  const data = useSelector(selectDataExcel);

  const [filter, setFilter]=useState(data);

  return (
    <div className='grid'>
      <div className='pt-6 pb-4'>
        <TitlePage text={"Administrar Estudiantes"} />
      </div>
      <OptionTable filter={filter.data.length? filter:data} setFilter={setFilter}  />
      <br />
      <div className='overflow-scroll'>
        <Table data={filter.data.length? filter:data} />
      </div>
    </div>
  )
}

export default PlantillaEstudent