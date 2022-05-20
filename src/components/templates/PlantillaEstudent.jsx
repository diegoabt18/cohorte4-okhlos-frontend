import React from 'react'
import { Table } from '../organisms/Index'
import { PageOptionsTitle, OptionTable } from '../molecules'
import { TitlePage } from '../atoms'
import { useSelector } from 'react-redux'
import { selectDataExcel } from '../../redux/slices/loadDataSlice'


const PlantillaEstudent = () => {
  const data = useSelector(selectDataExcel);
  return (
    <div className='grid'>
      <div className='pt-6 pb-4'>
        <TitlePage text={"Administrar Estudiantes"} />
      </div>
      <OptionTable />
      <div className=''>
        <Table data={data} />

      </div>
    </div>
  )
}

export default PlantillaEstudent