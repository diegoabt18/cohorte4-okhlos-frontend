import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import matchServices from '../../api/services/matchServices'

const BasicComboBox = () => {

    const [cohorte, setCohorte] = useState([])

    useEffect(() => {
        const data = matchServices.getPrograms()
        data.then(respuesta => {
            console.log(respuesta)
            setCohorte(respuesta)
        })

    }, [])

    return (
        <Select className='w-[200px]' options={cohorte} placeholder={"Cohorte"} />
    )
}

export default BasicComboBox
