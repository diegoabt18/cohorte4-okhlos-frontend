import React from "react";
import Footer from "../components/templates/Footer"
import NavbarDashboard from "../components/templates/NavbarDashboard"
import SidebarResponsive from "../components/templates/SidebarResponsive"
import SidebarDashboard from "../components/templates/SidebarDashboard"


const PaginaAdmin = ({ children }) => {
  return (
    <div>
      <div className="flex ">
        <div>
          <div className="hidden lg:block">
            <SidebarDashboard />
          </div>
          <div className="lg:hidden w-max ">
            <SidebarResponsive />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between h-screen  ">
          <NavbarDashboard />
          <div className="overflow-scroll overflow-x-hidden">{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaAdmin;
