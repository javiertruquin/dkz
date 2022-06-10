import React from "react";
import VideoAV from "../components/Celular/AudioVisuales/VideoAV";
import VideoEventos from "../components/Celular/Eventos/VideoEventos";

export default function TrabajosEventosDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoEventos />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoEventos />
            </div>
        </div>
    );
}
