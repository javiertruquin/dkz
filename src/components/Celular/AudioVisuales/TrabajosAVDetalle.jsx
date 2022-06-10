import React from "react";
import NavbarReact from "../../NavbarReact";
import Iconos from "../../Iconos";
import Footer from "../../Footer";
import VideoAV from "./VideoAV";
import NavEscritorio from "../../Escritorio/NavEscritorio";
import FooterEscritorio from "../../Escritorio/FooterEscritorio";

export default function TrabajosAVDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <NavbarReact />
                <VideoAV />
                <Iconos />
                <hr className="bg-white" />
                <Footer />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <div className="d-none d-lg-block">
                    <NavEscritorio />
                </div>
                <div className="d-lg-none d-block">
                    <NavbarReact />
                </div>
                <VideoAV />
                <FooterEscritorio />
            </div>
        </div>
    );
}
