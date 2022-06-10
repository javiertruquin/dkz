import React from "react";
import DiseñoGraficoEscritorio from "../components/Escritorio/DiseñoGrafico/DiseñoGraficoEscritorio";

import SitioConstruccion from "../components/SitioConstruccion";
import TrabajosDiseñoGrafico from "../components/TrabajosDiseñoGrafico";


export default function DiseñoGraf() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
                <TrabajosDiseñoGrafico />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <DiseñoGraficoEscritorio />
            </div>
        </div>
    );
}
