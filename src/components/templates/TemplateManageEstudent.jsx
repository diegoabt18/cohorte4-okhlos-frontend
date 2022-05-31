import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudent, selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice';
import {OptionTableAdmin, PageOptionsTitle} from '../molecules';
import {BasicTable, NewStudent} from '../organisms';
import studentServices from '../../api/services/studentServices';

const templateManageEstudent = () => {
    
    useEffect(() => {
        dispatch(getAllStudent());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectDataEstudentApi)
    const [filter, setFilter]=useState(dataApi);
    
    return (
        <div className='grid'>
            <div className='pt-6 pb-4 px-4 font-Roboto font-bold text-center'>
                <PageOptionsTitle text={"Administrar Estudiantes"} className='text-center' />
                <NewStudent />
            </div>
            <div className='px-2'>
                <OptionTableAdmin func={studentServices.getStudentCohort} filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"student"}  text={'Agregar Estudiante'}/>
            </div>
            <br />
            <div className='overflow-scroll'>
                 <BasicTable datos={filter.data.length? filter:dataApi} func={studentServices.offStudent}  /> 
            </div>

        </div>
    )
}

export default templateManageEstudent