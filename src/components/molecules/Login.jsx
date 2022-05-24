import React from 'react'
import { NavLink } from 'react-router-dom'
import { BasicButton, BasicInputText, LinkForgetPassword, LogoColorLapiz, } from '../atoms'

const Login = () => {
    return (
        <div className='flex gap-y-7 items-center justify-center flex-col w-full '>
            <LogoColorLapiz/>
            <h2 className='font-Roboto text-PrimarioColor1 mt-10 text-3xl pb-8 font-bold text-center'>
                Bienvenido a OKHLOS
            </h2>
            <div className='flex flex-col gap-y-1 '>
                <BasicInputText />
                <BasicInputText />
            </div>
            <NavLink to={"/Dashboard"}>
                <BasicButton text={"Ingresar"} />
            </NavLink>
            <LinkForgetPassword />
        </div>
    )
}

export default Login