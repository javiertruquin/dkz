import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import SitiosWebsEscritorio from "../components/Escritorio/SitiosWebs/SitiosWebsEscritorio";

export default function SitiosWeb() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <SitiosWebsEscritorio />
            </div>
        </div>
    );
}
