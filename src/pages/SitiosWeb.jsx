import React from "react";
import BannerSitiosW from "../components/Celular/SitiosWeb/BannerSitiosW";
import SitiosWebsEscritorio from "../components/Escritorio/SitiosWebs/SitiosWebsEscritorio";


export default function SitiosWeb() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerSitiosW />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <SitiosWebsEscritorio />
            </div>
        </div>
    );
}
