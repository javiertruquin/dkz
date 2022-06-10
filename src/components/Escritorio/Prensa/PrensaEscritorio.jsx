import "./prensa.css";
import BannerPrensa from "./BannerPrensa";
import BotonContactanos from "../../BotonContactanos";
import TrabajosPrensa from "../../TrabajosPrensa";

export default function PrensaEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerPrensa />
            <TrabajosPrensa />
            <BotonContactanos />
        </div>
    );
}
