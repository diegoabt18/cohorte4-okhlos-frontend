import React from 'react'
import { OptionTableAdmin, PageOptionsTitle } from '../molecules'
import { Table } from '../organisms'

const templateManageEstudent = () => {
    //Llenar tabla con datos de la bases de datos
    //Peticion axios para permitirme filtrar por palabra
    //
    const columnas = [[0,
        "nombre",
        "apellido",
        "columna1",
        "columna2",
        "columna3",
        "columna4",
        "columna5",
        "columna6"]]
    const array = [
        ['1', 'Alejandra Montañez Robayo', 'alemonro27@gmail.com', 33, 'empty', 1, 3135123438, 'empty', 'Mujer'],
        ['2', 'Ana María Espinosa', 'ana0espinosa@gmail.com', 25, 'empty', 'No', 3042474942, 'empty', 'Mujer'],
        ['3', 'Andres Felipe Buitrago Lesmes', 'abuitrago@twilio.com', 32, 'empty', 2, 3015317967, 'empty', 'Hombre'],
        ['4', 'Andres Gonzalez', 'nanoandres_24@hotmail.com', 27, 'empty', 2, 3192405586, 'empty', 'Hombre'],
        ['5', 'Andrés Rodríguez Cortés', 'metaskopia@gmail.com', 34, 'No', 'empty', 3107983826, 'empty', 'Masculino'],
        ['6', 'Camilo Andres Montañez Aldana', 'outs.camilo.montanez@huawei.com', '33', 'empty', 2, '3187073143', 'empty', 'Hombre'],
        ['7', 'Carlos Alberto Riveros Varela', 'carlosriverosv@gmail.com', 30, 'empty', 2, 3144894028, 'empty', 'Hombre'],
        ['11', 'Danilo Javier Ochoa Jaramillo', 'danilo.ochoa@thalesgroup.com', 40, 'empty', 1, 3209895729, 'empty', 'Hombre'],
        ['13', 'Diego Fernando Mora Velasco', 'difemove@gmail.com', 27, 'No', 'empty', 3138657540, 'empty', 'Masculino'],
        ['14', 'Edith Milena Sarmiento Fernández', 'edithmilena1979@gmail.com', 42, 'empty', 2, 3166197057, 'Falta', 'Mujer'],
        ['15', 'Fabio Avellaneda', 'favellaneda@twilio.com', 42, 'empty', 2, 3118108525, 'empty', 'Hombre'],
        ['17', 'German Javier Foliaco', 'germanfoliaco2@gmail.com', 40, 'empty', 2, '3045891787', 'empty', 'Hombre'],
        ['18', 'Hector mendoza', 'hmendoza@chicagobooth.edu', 29, 'No', 'empty', '+13126874418', 'empty', 'Masculino'],
        ['20', 'Johnner Alexander Gambacica Ortiz', 'johnner@outlook.com', 28, 'empty', 2, 3208766565, 'Falta', 'Hombre'],
        ['22', 'Jose Giovanni Vargas Rueda', 'ruedagato@gmail.com', 27, 'No', 'empty', 3202238531, 'empty', 'Masculino']
    ];
    console.log(array)
    const data = {
        data: array,
        columnas: columnas,
        file: true
    }



    return (
        <div className='grid'>
            <div className='pt-6 pb-4 px-4'>
                <PageOptionsTitle text={"Administrar Estudiantes"} />
            </div>
            <div className='px-2'>
                <OptionTableAdmin />
            </div>
            <br />
            <div className='overflow-scroll'>
                <Table data={data} />
            </div>
        </div>
    )
}

export default templateManageEstudent