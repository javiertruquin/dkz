import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import VideoSitiosWeb from "../components/VideoSitiosWeb";

export default function TrabajosSitiosWebDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed">
                <VideoSitiosWeb />
                <BotonContactanos />
            </div>
        </div>
    );
}
