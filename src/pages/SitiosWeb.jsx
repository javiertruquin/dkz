
import BannerSitiosWeb from "../components/Escritorio/SitiosWebs/BannerSitiosWeb";
import ContenidoSitioWebs from "../components/Escritorio/SitiosWebs/ContenidoSitioWebs";

export default function SitiosWeb() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo  d-sm-none d-block">
                <BannerSitiosWeb />
                <ContenidoSitioWebs />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <BannerSitiosWeb />
                <ContenidoSitioWebs />
            </div>
        </div>
    );
}
