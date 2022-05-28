import React from "react";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import BannerT from "../components/Celular/MindBlown/BannerT";
import Trabajos from "../components/Celular/MindBlown/Trabajos";
import Clientes from "../components/Celular/MindBlown/Clientes";
import NavbarReact from "../components/NavbarReact";
import BotonContactanos from "../components/BotonContactanos";
import MindBlownEscritorio from "../components/Escritorio/MindBlown/MindBlownEscritorio";



export default function MindBlown() {
  return (
    <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
      <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
        <NavbarReact />
        <BannerT />
        <Trabajos />
        <Clientes />
        <div className="pt-5">
          <BotonContactanos />
        </div>
        <Iconos />
        <hr className="bg-white" />
        <Footer />
      </div>
      <div className="d-flex flex-column color-azul-oscuro-fondo d-none d-sm-block" style={{minHeight: '100vh'}}>
        <MindBlownEscritorio />
      </div>
    </div>
  );
}
