import React from "react";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import BannerT from "../components/MindBlown/BannerT";
import Trabajos from "../components/MindBlown/Trabajos";
import Clientes from "../components/MindBlown/Clientes";
import NavbarReact from "../components/NavbarReact";
import BotonContactanos from "../components/BotonContactanos";
import MindBlownEscritorio from "../components/Escritorio/MindBlown/MindBlownEscritorio";



export default function MindBlown() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
        <NavbarReact />
        <BannerT />
        <Trabajos />
        <Clientes />
        <div className="pt-5">
          <BotonContactanos />
        </div>
        <Iconos />
        <Footer />
      </div>
      <div className="d-none d-sm-block">
        <MindBlownEscritorio />
      </div>
    </div>
  );
}
