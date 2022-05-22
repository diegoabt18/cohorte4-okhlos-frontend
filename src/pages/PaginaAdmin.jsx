import React from 'react'
import { Footer, NavbarDashboard, SidebarDashboard } from '../components/templates'

const PaginaAdmin = ({ children }) => {
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
                <div>
                    <Footer />
                </div>

            </div>


        </div>

    );
};

export default PaginaAdmin;
