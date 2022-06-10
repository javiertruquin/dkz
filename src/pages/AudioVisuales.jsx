import React from "react";
import BannerAV from "../components/Celular/AudioVisuales/BannerAV";
import ContenidoAV from "../components/Celular/AudioVisuales/ContenidoAV";
import ContenidoAVP from "../components/Celular/AudioVisuales/ContenidoAVP";
import ContenidoAVPost from "../components/Celular/AudioVisuales/ContenidoAVPost";
import ContenidoAVPP from "../components/Celular/AudioVisuales/ContenidoAVPP";
import BotonContactanos from "../components/BotonContactanos";
import AudioVisualEscritorio from "../components/Escritorio/AudioVisual/AudioVisualEscritorio";
import TrabajosAV from "../components/TrabajosAV";

export default function AudioVisuales() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerAV />
                <ContenidoAV />
                <ContenidoAVPP />
                <ContenidoAVP />
                <ContenidoAVPost />
                <TrabajosAV />
                <BotonContactanos />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <AudioVisualEscritorio />
            </div>
        </div>
    );
}
