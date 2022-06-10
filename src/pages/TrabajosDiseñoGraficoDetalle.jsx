import React from "react";
import VideoDiseñoGrafico from "../components/Celular/DiseñoGrafico/VideoDiseñoGrafico";
import VideoDiseñoGraficoEscritorio from "../components/Escritorio/DiseñoGrafico/VideoDiseñoGraficoEscritorio";

export default function TrabajosDiseñoGraficoDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoDiseñoGrafico />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoDiseñoGraficoEscritorio />
            </div>
        </div>
    );
}
