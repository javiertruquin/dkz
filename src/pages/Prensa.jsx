import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import PrensaEscritorio from "../components/Escritorio/Prensa/PrensaEscritorio";
import TrabajosPrensa from "../components/TrabajosPrensa";

export default function Prensa() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
                <TrabajosPrensa />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <PrensaEscritorio />
            </div>
        </div>
    );
}
