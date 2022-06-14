import React from "react";
import VideoEventos from "../components/Celular/Eventos/VideoEventos";
import VideoEventosEscritorio from "../components/Escritorio/Eventos/VideoEventosEscritorio";

export default function TrabajosEventosDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoEventos />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoEventosEscritorio />
            </div>
        </div>
    );
}