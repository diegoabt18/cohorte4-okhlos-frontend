import React from 'react'
import { NavbarDashboard, SidebarDashboard } from '../components/templates'
import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from './Dashboard';
import EstudentPageLoad from './EstudentPageLoad';
import ManageStudent from './ManageStudent';

const PaginaAdmin = ({children}) => {
    return (
        <div className='flex'>
            <div>
                <SidebarDashboard />
            </div>
            <div className='w-full'>
                <NavbarDashboard />
                <div id='Cuerpo' className=''>
                 
                    {children}

                </div>

            </div>


        </div>
    )
}

export default PaginaAdmin