import React from 'react'
import authServices from '../../api/services/authServices'

const TextInfoDashBoard = () => {
  const user = authServices.isLogin()
  return (
    <div>
    <h3 className='font-Roboto text-[2rem]'>Dashboard</h3>
    <h4 className='font-GilroyLight font-bold'>Hola {user.name} </h4>
    <p className='font-GilroyLight'>Bienvenido de vuelta al panel de administración.</p>
    <p className='font-GilroyLight'>Desplácese hacia abajo para ver información rápida y descripciones generales de la dashboard.</p>
    </div>
    )
}

export default TextInfoDashBoard