import React from "react";
import VideoSocialMedia from "../components/Celular/SocialMedia/VideoSocialMedia";
import VideoSocialMediaEscritorio from "../components/Escritorio/SocialMedia/VideoSocialMediaEscritorio";

export default function TrabajosSocialMediaDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoSocialMedia />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoSocialMediaEscritorio/>
            </div>
        </div>
    );
}