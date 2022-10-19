
import BannerSitiosW from "../components/Celular/SitiosWeb/BannerSitiosW";
import BannerSitiosWeb from "../components/Escritorio/SitiosWebs/BannerSitiosWeb";
import ContenidoSitioWebs from "../components/Escritorio/SitiosWebs/ContenidoSitioWebs";
import TextoSitioWeb from "../components/Escritorio/SitiosWebs/TextoSitioWeb";
import TrabajosSitiosWeb from "../components/TrabajosSitiosWeb";

export default function SitiosWeb() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo d-sm-none d-block">
                <BannerSitiosW />
                <TextoSitioWeb />
                <ContenidoSitioWebs />
                <TrabajosSitiosWeb />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <BannerSitiosWeb />
                <TextoSitioWeb />
                <ContenidoSitioWebs />
                <TrabajosSitiosWeb />
            </div>
        </div>
    );
}
