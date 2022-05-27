import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudent, selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice';
import OptionTableAdmin from '../molecules/OptionTableAdmin';
import PageOptionsTitle from '../molecules/PageOptionsTitle';
import BasicTable from '../organisms/BasicTable';
import NewStudent from '../organisms/NewStudent';

const templateManageEstudent = () => {
    //Llenar tabla con datos de la bases de datos
    //Peticion axios para permitirme filtrar por palabra
    //

    useEffect(() => {
        dispatch(getAllStudent());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectDataEstudentApi)
    const [filter, setFilter]=useState(dataApi);
    console.log(filter.data.length)


    return (
        <div className='grid'>
            <div className='pt-6 pb-4 px-4 font-Roboto font-bold'>
                <PageOptionsTitle text={"Administrar Estudiantes"} />
                <NewStudent />
            </div>
            <div className='px-2'>
                <OptionTableAdmin filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"student"}  text={'Agregar Estudiante'}/>
            </div>
            <br />
            <div className='overflow-scroll'>
                 <BasicTable datos={filter.data.length? filter:dataApi}  /> 
            </div>

        </div>
    )
}

export default templateManageEstudent