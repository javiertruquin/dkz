import React from "react";
import NavbarReact from "../components/NavbarReact";
import PaginaError from "../components/PaginaError";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import PaginaNoExisteEscritorio from "../components/Escritorio/PaginaNoExiste/PaginaNoExisteEscritorio";

export default function PaginaNoExiste() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
        <NavbarReact />
        <PaginaError />
        <Iconos />
        <Footer />
      </div>
      <div className="d-none d-sm-block">
        <PaginaNoExisteEscritorio />
      </div>
    </div>
  );
}
