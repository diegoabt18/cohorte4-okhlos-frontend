import React from 'react'
import { Footer, NavbarDashboard, SidebarDashboard } from '../components/templates'

const PaginaAdmin = ({ children }) => {
    return (
        <div>
            <div className='flex '>
                <div>
                    <SidebarDashboard />
                </div>
                
                <div className='w-full flex flex-col justify-between h-screen  '>
                    <NavbarDashboard />
                    <div className='overflow-scroll overflow-x-hidden'>
                        {children}
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>                
            </div>
        
       

       {/* <div className='flex  overscroll-none'>
            <div>
                <SidebarDashboard />
            </div>
            <div className='w-full '>
                <NavbarDashboard />
                <div id='Cuerpo' className='overflow-scroll h-[100vh]'>
                    {children}
                </div>
                <div className='fixed'>
                    <Footer />
                </div>
            </div>
        </div>
        */}
        </div>
    );
};

export default PaginaAdmin;
