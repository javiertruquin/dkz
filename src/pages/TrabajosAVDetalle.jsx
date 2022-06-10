import React from "react";
import VideoAV from "../components/Celular/AudioVisuales/VideoAV";
import FooterEscritorio from "../components/Escritorio/FooterEscritorio";
import NavEscritorio from "../components/Escritorio/NavEscritorio";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";

export default function TrabajosAVDetalle() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoAV />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoAV />
            </div>
        </div>
    );
}
