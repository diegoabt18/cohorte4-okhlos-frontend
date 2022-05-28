import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMentor, selectDataMentorApi } from '../../redux/slices/DataApiMentorSlice';
import OptionTableAdmin from '../molecules/OptionTableAdmin';
import PageOptionsTitle from '../molecules/PageOptionsTitle';
import BasicTable from '../organisms/BasicTable';
import NewMentor  from '../organisms/NewMentor';

const TemplateManageMentor = () => {
    useEffect(() => {
        dispatch(getAllMentor());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectDataMentorApi)
    const [filter, setFilter]=useState(dataApi);
       
    return (
            <div className='grid'>
                <div className='pt-6 pb-4 px-4 font-Roboto font-bold'>
                    <PageOptionsTitle text={"Administrar Mentores"} />
                    <NewMentor />
                </div>
                <div className='px-2'>
                    <OptionTableAdmin filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"mentor"} text={'Agregar Mentor'}/>
                </div>
                <br />
                <div className='overflow-scroll'>
                     <BasicTable datos={filter.data.length? filter:dataApi}  /> 
                </div>
            </div>
        )
}
    
export default TemplateManageMentor