import React from "react";
import VideoPrensa from "../components/Celular/Prensa/VideoPrensa";
import VideoPrensaEscritorio from "../components/Escritorio/Prensa/VideoPrensaEscritorio";

export default function TrabajosPrensaDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoPrensa />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoPrensaEscritorio />
            </div>
        </div>
    );
}
