import React from "react";
import {
  Footer,
  NavbarDashboard,
  NavbarResponsive,
  SidebarDashboard,
} from "../components/templates";

const PaginaAdmin = ({ children }) => {
  return (
    <div>
      <div className="flex ">
        <div>
          <div className="hidden lg:block">
            <SidebarDashboard />
          </div>
          <div className="lg:hidden w-min">
            <NavbarResponsive />
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
