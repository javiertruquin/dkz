
import Trabajos from "../components/Celular/HomeCel/Trabajos";
import BannerSitiosW from "../components/Celular/SitiosWeb/BannerSitiosW";
import BannerSitiosWeb from "../components/Escritorio/SitiosWebs/BannerSitiosWeb";
import ContenidoSitioWebs from "../components/Escritorio/SitiosWebs/ContenidoSitioWebs";
import TrabajosSitiosWeb from "../components/TrabajosSitiosWeb";

export default function SitiosWeb() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo d-sm-none d-block">
                <BannerSitiosW />
                <ContenidoSitioWebs />
                <TrabajosSitiosWeb />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <BannerSitiosWeb />
                <ContenidoSitioWebs />
                <TrabajosSitiosWeb />
            </div>
        </div>
    );
}
