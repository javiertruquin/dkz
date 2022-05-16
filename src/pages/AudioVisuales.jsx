import React from "react";
import BannerAV from "../components/AudioVisuales/BannerAV";
import ContenidoAV from "../components/AudioVisuales/ContenidoAV";
import ContenidoAVP from "../components/AudioVisuales/ContenidoAVP";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";

export default function AudioVisuales() {
  return (
    <div className="color-azul-oscuro-fondo">
      <NavbarReact />
      <BannerAV />
              <ContenidoAV />
          <div className="p-5">
              <ContenidoAVP />
          </div>
          <div className="my-5">
          <Iconos />
          </div>
  
      <Footer />
    </div>
  );
}
