import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMentor, selectDataMentorApi } from '../../redux/slices/DataApiMentorSlice';
import {OptionTableAdmin, PageOptionsTitle} from '../molecules';
import {BasicTable, NewMentor} from '../organisms';
import mentorServices from '../../api/services/mentorServices';

const TemplateManageMentor = () => {
    useEffect(() => {
        dispatch(getAllMentor());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectDataMentorApi)
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
                    <PageOptionsTitle text={"Administrar Mentores"} className='text-center' />
                    <NewMentor />
                    <ModalUpdate state={open} setState={setOpen} >
                    <DataMentorUpdate DataForm={DataForm} setDataForm={setDataForm} setOpen={setOpen}/>
                </ModalUpdate>
                </div>
                <div className='px-2'>
                    <OptionTableAdmin func={mentorServices.getMentorCohort}  filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"mentor"} text={'Agregar Mentor'}/>
                </div>
                <br />
                <div className='overflow-scroll'>
                 <BasicTable setState={setOpen} DataForm={DataForm} setDataForm={setDataForm} datos={filter.data.length? filter:dataApi} func={mentorServices.offMentor}  /> 
                </div>
            </div>
        )
}
    
export default TemplateManageMentor