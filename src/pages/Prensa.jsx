import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import PrensaEscritorio from "../components/Escritorio/Prensa/PrensaEscritorio";

export default function Prensa() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <PrensaEscritorio />
            </div>
        </div>
    );
}
