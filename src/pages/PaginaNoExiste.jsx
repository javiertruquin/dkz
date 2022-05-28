import React from "react";
import NavbarReact from "../components/NavbarReact";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import PaginaNoExisteEscritorio from "../components/Escritorio/PaginaNoExiste/PaginaNoExisteEscritorio";
import PaginaError from "../components/Celular/NotFound/PaginaError";

export default function PaginaNoExiste() {
  return (
    <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
      <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
        <NavbarReact />
        <PaginaError />
        <Iconos />
        <hr className="bg-white" />
        <Footer />
      </div>
      <div className="d-flex flex-column color-azul-oscuro-fondo d-none d-sm-block" style={{minHeight: '100vh'}}>
        <PaginaNoExisteEscritorio />
      </div>
    </div>
  );
}
