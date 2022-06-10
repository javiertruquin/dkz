import React from "react";
import BotonContactanos from "../../BotonContactanos";
import TrabajosSocialMedia from "../../TrabajosSocialMedia";
import BannerSocialM from "./BannerSocialM";

export default function SocialMediaEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerSocialM />
            <TrabajosSocialMedia />
            <BotonContactanos />
        </div>
    );
}
