import React from "react";
import NavbarReact from "../components/NavbarReact";

import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import SitioConstruccion from "../components/SitioConstruccion";

export default function MarketingContenidos() {
  return (
    <div>
      <NavbarReact />
      <SitioConstruccion />
          <Iconos />
          <div className="mt-5">
          <Footer/>
          </div>
      
    </div>
  );
}
