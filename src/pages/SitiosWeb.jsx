import React from "react";
import NavbarReact from "../components/NavbarReact";
import SitioConstruccion from "../components/SitioConstruccion";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import SitiosWebsEscritorio from "../components/Escritorio/SitiosWebs/SitiosWebsEscritorio";


export default function SitiosWeb() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
        <NavbarReact />
        <SitioConstruccion />
        <Iconos />
        <hr className="bg-white" />
        <Footer />
      </div>
      <div className="d-none d-sm-block">
        <SitiosWebsEscritorio />
      </div>
    </div>
  );
}
