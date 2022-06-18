import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import VideoEventos from "../components/VideoEventos";

export default function TrabajosEventosDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed">
                <VideoEventos />
                <BotonContactanos />
            </div>
        </div>
    );
}
