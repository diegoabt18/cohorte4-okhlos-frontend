import React from 'react'
import { BasicButton, BasicButtonIcon } from '../atoms'

import Perfil from '../molecules/Perfil'
import UserLogin from '../molecules/UserLogin'

const ContenedorPerfil = () => {
    return (
        <div className='z-20'>
            <ul className="menu menu-horizontal bg-base-100  px-4  ">
                <li tabIndex="0" >
                    <span className='px-6'><UserLogin /></span>
                    <ul className=" bg-base-100 p-2 w-full ">
                        <a>
                            <Perfil />
                            <div className=' flex justify-end mt-3'>
                                <BasicButton text={"Salir"}/>
                            </div>
                        </a>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ContenedorPerfil