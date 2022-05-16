import React from "react";
import BannerAV from "../components/AudioVisuales/BannerAV";
import Contacto from "../components/AudioVisuales/Contacto";
import ContenidoAVP from "../components/AudioVisuales/ContenidoAVP";
import ContenidoAVPost from "../components/AudioVisuales/ContenidoAVPost";
import ContenidoAVPP from "../components/AudioVisuales/ContenidoAVPP";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";

export default function AudioVisuales() {
  return (
    <div className="color-azul-oscuro-fondo">
      <NavbarReact />
      <BannerAV />
      <ContenidoAVPP />
      <ContenidoAVP />
      <ContenidoAVPost />
      <Contacto />
      <div>
        <Iconos />
      </div>
      <hr className="bg-white"/>
      <Footer />
    </div>
  );
}
