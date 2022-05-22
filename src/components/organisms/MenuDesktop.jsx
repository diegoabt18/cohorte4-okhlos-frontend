import React from 'react';
import { OnlyItemMenu, ItemMenu } from '../molecules'
import { IconMenu } from '../atoms'
import { NavLink } from 'react-router-dom';

const MenuDesktop = () => {
    return (
        <div className='font-Roboto'>
            <div className='bg-PrimarioColor5 text-white p-2 pl-4 font-bold'>
                Menu Principal
            </div>
            <div className='text-lg font-Roboto font-bold hover:bg-PrimarioColor2 py-2'>
                <OnlyItemMenu icon={"ci:home-alt-outline"} text={"Inicio"} toLink={"/Dashboard"} />

            </div>
            <ItemMenu icon={"ph:student-fill"} text={"Estudiantes"}  >
                <NavLink to={"/EstudentLoad"} >
                    <div className="hover:text-PrimarioColor1">
                        <IconMenu icon={"akar-icons:circle"} text={"Cargar Datos"} />
                    </div>
                </NavLink>
                <NavLink to={"/EstudentManage"}>
                    <div className="hover:text-PrimarioColor1">
                        <IconMenu icon={"akar-icons:circle"} text={"Administrar Estudiantes"} />
                    </div>
                </NavLink>
            </ItemMenu>
            <ItemMenu icon={"carbon:user-profile"} text={"Mentores"}  >
                <IconMenu icon={"akar-icons:circle"} text={"Cargar Datos"} />
                <IconMenu icon={"akar-icons:circle"} text={"Informe Mentores"} />
            </ItemMenu>
            <ItemMenu icon={"fontisto:equalizer"} text={"Match"}  >
                <IconMenu icon={"akar-icons:circle"} text={"Realizar Match"} />
            </ItemMenu>
            <ItemMenu icon={"carbon:group-presentation"} text={"Sesiones"}  >
                <IconMenu icon={"akar-icons:circle"} text={"Informe Sesiones"} />
            </ItemMenu>
        </div>
    )
}

export default MenuDesktop