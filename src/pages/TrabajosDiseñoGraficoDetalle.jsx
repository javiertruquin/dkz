import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import VideoDiseñoGrafico from "../components/VideoDiseñoGrafico";

export default function TrabajosDiseñoGraficoDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed ">
                <VideoDiseñoGrafico />
                <BotonContactanos />
            </div>
        </div>
    );
}
