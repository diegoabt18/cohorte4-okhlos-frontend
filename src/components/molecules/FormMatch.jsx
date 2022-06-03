import React from 'react'
import { BasicComboBox, ComboStudentMatch } from '../atoms'
import { selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice'
import { useSelector } from 'react-redux'

const FormMatch = ({func,data}) => {
  //const dataestudent = useSelector(selectDataEstudentApi)

  return (
    <div>
        <BasicComboBox load={"student"} func={func} data={data} />
        <ComboStudentMatch data={data} />
    </div>
  )
}

export default FormMatch