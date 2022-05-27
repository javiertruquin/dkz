import React from "react";
import NavbarReact from "../components/NavbarReact";
import FormContactanos from "../components/Celular/Contactanos/FormContactanos";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import ContactanosEscritorio from "../components/Escritorio/Contactanos/ContactanosEscritorio";

export default function Contactanos() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
        <NavbarReact />
        <FormContactanos />
        <Iconos />
        <hr className="bg-white" />
        <Footer />
      </div>
      <div className="color-azul-oscuro-fondo d-none d-sm-block">
        <ContactanosEscritorio />
      </div>
    </div>
  );
}
