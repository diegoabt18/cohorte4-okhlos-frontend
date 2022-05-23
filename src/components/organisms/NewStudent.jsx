import React from 'react'
import AddStudent from '../molecules/AddStudent'
import ComboBoxPreferStudent from '../molecules/ComboBoxPreferStudent'
import DataStudent from '../molecules/DataStudent'
import FooterModal from '../molecules/FooterModal'

const NewStudent = () => {
    return (
        <div>
            <AddStudent />
            <DataStudent />
            <ComboBoxPreferStudent />
            <FooterModal />
        </div>
    )
}

export default NewStudent