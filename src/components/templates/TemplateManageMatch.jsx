import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatchByCohort, selectMatchManage } from '../../redux/slices/DataApiMatchSlice';
import {DataMentorUpdate, DataMentor, ModalUpdate, OptionTableAdmin, PageOptionsTitle} from '../molecules';
import {BasicTable } from '../organisms';

const TemplateManageMatch = () => {
    useEffect(() => {
        dispatch(getAllMatchByCohort());
    }, [])
    const dispatch = useDispatch()

    const dataApi = useSelector(selectMatchManage)
    const [filter, setFilter]=useState(dataApi);
    const [open, setOpen]=useState(false);
    const [openNew, setOpenNew]=useState(false);
    const [DataForm, setDataForm] = useState({
        id:null,
        nameMentor: "",
        nameStudent: "",
        score: null
    }); 

    function loadDataModal(data) {
        console.log(data)
        setDataForm({
            ...DataForm,
            id: data[0],
            nameMentor: data[1],
            nameStudent: data[2],
            score: data[3]
            })
        }
    return (
            <div className='grid'>
                <div className='pt-6 pb-4 px-4 font-Roboto font-bold text-center'>
                    <PageOptionsTitle text={"Administrar Match"} className='text-center' />
                    <ModalUpdate  state={openNew} setState={setOpenNew} >
                    <DataMentor setOpen={setOpenNew}/>
                    </ModalUpdate>
                    {/* <ModalUpdate state={open} setState={setOpen} >
                        <DataMentorUpdate DataForm={DataForm} setDataForm={setDataForm} setOpen={setOpen}/>
                    </ModalUpdate> */}
                    
                </div>
                <div className='px-2'>
                    <OptionTableAdmin setOpen={setOpenNew} func={""}  filter={filter.data.length? filter:dataApi} setFilter={setFilter} load={"match"} text={'Agregar Mentor'}/>
                </div>
                <br />
                <div className='overflow-scroll'>
                    <BasicTable setState={setOpen} loadDataModal={loadDataModal} datos={filter.data.length? filter:dataApi}/> 
                </div>
            </div>
        )
}
    
export default TemplateManageMatch