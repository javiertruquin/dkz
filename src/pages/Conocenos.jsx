import React from "react";
import NavbarReact from "../components/NavbarReact";
import Banner from "../components/Celular/Nosotros/Banner";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import BotonContactanos from "../components/BotonContactanos";
import ConocenosEscritorio from "../components/Escritorio/Conocenos/ConocenosEscritorio";

export default function Conocenos() {
  return (
    <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
      <div className="color-azul-oscuro-fondo  d-sm-none d-block">
        <NavbarReact />
        <Banner />
        <div className="pt-5">
          <BotonContactanos />
        </div>
        <Iconos />
        <hr className="bg-white" />
        <Footer />
      </div>
      <div className="color-azul-oscuro-fondo d-none d-sm-block">
        <ConocenosEscritorio />
      </div>
    </div>
  );
}
