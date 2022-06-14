import "./sitios.css";
import BannerSitiosWeb from "./BannerSitiosWeb";
import BotonContactanos from "../../BotonContactanos";
import SitiosMap from "./SitiosMap";


export default function SitiosWebsEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerSitiosWeb />
            <SitiosMap />
            <BotonContactanos />
        </div>
    );
}
