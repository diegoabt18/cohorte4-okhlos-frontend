import React from 'react'
import { useSelector } from 'react-redux';
import { selectDataExcel } from '../../redux/slices/loadDataSlice';
import { OptionTable, PageOptionsTitle } from '../molecules'
import {Table} from '../organisms'

const templateManageEstudent = () => {
    const data = useSelector(selectDataExcel);

    return (
        <div>
            <PageOptionsTitle />
            <OptionTable />
            <Table data={data}/>
        </div>
    )
}

export default templateManageEstudent