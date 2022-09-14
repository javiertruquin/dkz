import BotonContactanos from "../components/BotonContactanos";
import BannerPrensa from "../components/Celular/Prensa/BannerPrensa";
import PrensaEscritorio from "../components/Escritorio/Prensa/PrensaEscritorio";
import { Radio } from "../components/Escritorio/Prensa/Radio";
import TrabajosPrensa from "../components/TrabajosPrensa";

export default function Prensa() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerPrensa />
                <TrabajosPrensa />
                <Radio />
                <BotonContactanos />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <PrensaEscritorio />
            </div>
        </div>
    );
}
