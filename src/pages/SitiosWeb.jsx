import React from "react";
// import BannerSitiosW from "../components/Celular/SitiosWeb/BannerSitiosW";
// import SitiosWebsEscritorio from "../components/Escritorio/SitiosWebs/SitiosWebsEscritorio";
import SitioConstruccion from "../components/SitioConstruccion";


export default function SitiosWeb() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo  d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <SitioConstruccion />
            </div>
        </div>
    );
}
