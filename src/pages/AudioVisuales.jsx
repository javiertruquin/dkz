import React from "react";
import BannerAV from "../components/AudioVisuales/BannerAV";
import ContenidoAV from "../components/AudioVisuales/ContenidoAV";
import ContenidoAVP from "../components/AudioVisuales/ContenidoAVP";
import ContenidoAVPost from "../components/AudioVisuales/ContenidoAVPost";
import ContenidoAVPP from "../components/AudioVisuales/ContenidoAVPP";
import BotonContactanos from "../components/BotonContactanos";
import AudioVisualEscritorio from "../components/Escritorio/AudioVisual/AudioVisualEscritorio";

import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";

export default function AudioVisuales() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <NavbarReact />
                <BannerAV />
                <ContenidoAV />
                <ContenidoAVPP />
                <ContenidoAVP />
                <ContenidoAVPost />
                <BotonContactanos />
                <Iconos />
                <hr className="bg-white" />
                <Footer />
            </div>
            <div className="color-azul-oscuro-fondo  d-none d-sm-block">
                <AudioVisualEscritorio />
            </div>
        </div>
    );
}
