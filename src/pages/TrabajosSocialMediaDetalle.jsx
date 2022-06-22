import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import VideoSocialMedia from "../components/VideoSocialMedia";

export default function TrabajosSocialMediaDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed">
                <VideoSocialMedia />
                <BotonContactanos />
            </div>
        </div>
    );
}
