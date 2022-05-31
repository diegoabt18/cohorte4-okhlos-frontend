import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudent, selectDataEstudentApi } from '../../redux/slices/DataApiEstudentSlice';
import {OptionTableAdmin, PageOptionsTitle, ModalUpdate, DataStudentUpdate} from '../molecules';
import {BasicTable, NewStudent} from '../organisms';
import studentServices from '../../api/services/studentServices';

const templateManageEstudent = () => {
    useEffect(() => {
        dispatch(getAllStudent());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectDataEstudentApi)
    const [filter, setFilter]=useState(dataApi);
    const [open, setOpen]=useState(false);
    const [DataForm, setDataForm] = useState({
        id:null,
        name: "",
        email: "",
        cohorte: null,
        age: null,
        phone: null,
        status: 1,
        gender: "",
        program: "",
        intmenor: null,
        intmayor: null,
    });

    
    return (
        <div className='grid'>
            <div className='pt-6 pb-4 px-4 font-Roboto font-bold text-center'>
                <PageOptionsTitle text={"Administrar Estudiantes"} className='text-center' />
                <NewStudent />
                <ModalUpdate state={open} setState={setOpen} >
                    <DataStudentUpdate DataForm={DataForm} setDataForm={setDataForm} setOpen={setOpen}/>
                </ModalUpdate>
            </div>
            <div className='px-2'>
                <OptionTableAdmin  func={studentServices.getStudentCohort} filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"student"}  text={'Agregar Estudiante'}/>
            </div>
            <br />
            <div className='overflow-scroll'>
                 <BasicTable setState={setOpen} DataForm={DataForm} setDataForm={setDataForm} datos={filter.data.length? filter:dataApi} func={studentServices.offStudent}  /> 
            </div>
        </div>
    )
}

export default templateManageEstudent