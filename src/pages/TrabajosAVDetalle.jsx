import React from "react";
import VideoAV from "../components/Celular/AudioVisuales/VideoAV";
import VideoAVEscritorio from "../components/Escritorio/AudioVisual/VideoAVEscritorio";

export default function TrabajosAVDetalle() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoAV />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoAVEscritorio />
            </div>
        </div>
    );
}
