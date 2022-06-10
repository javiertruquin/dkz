import React from "react";
import NavbarReact from "../components/NavbarReact";
import SitioConstruccion from "../components/SitioConstruccion";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import PrensaEscritorio from "../components/Escritorio/Prensa/PrensaEscritorio";

export default function Prensa() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <PrensaEscritorio />
            </div>
        </div>
    );
}
