import React from "react";
import BannerAV from "../components/AudioVisuales/BannerAV";
import ContenidoAV from "../components/AudioVisuales/ContenidoAV";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";

export default function AudioVisuales() {
  return (
    <div className="color-azul-oscuro-fondo">
      <NavbarReact />
      <BannerAV />
      <div className="p-5">
        <ContenidoAV />
      </div>
      <Iconos />
      <Footer />
    </div>
  );
}
