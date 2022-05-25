import React from "react";
import {
  Footer,
  NavbarDashboard,
  NavbarResponsive,
  SidebarDashboard,
} from "../components/templates";

const PaginaAdmin = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <div className="hidden lg:block">
          <SidebarDashboard />
        </div>
        <div className="lg:hidden w-min">
          <NavbarResponsive />
        </div>
      </div>
      <div className="w-full">
        <NavbarDashboard />
        <div id="Cuerpo" className="">
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
