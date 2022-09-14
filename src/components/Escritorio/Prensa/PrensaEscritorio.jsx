import "./prensa.css";
import BannerPrensa from "./BannerPrensa";
import BotonContactanos from "../../BotonContactanos";
import TrabajosPrensa from "../../TrabajosPrensa";
import { Radio } from "./Radio";

export default function PrensaEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerPrensa />
            <TrabajosPrensa />
            <Radio />
            <BotonContactanos />
        </div>
    );
}
