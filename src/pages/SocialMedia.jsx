import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import SocialMediaEscritorio from "../components/Escritorio/SocialMedia/SocialMediaEscritorio";

export default function SocialMedia() {
    return (
        <div >
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <SocialMediaEscritorio />
            </div>
        </div>
    );
}
