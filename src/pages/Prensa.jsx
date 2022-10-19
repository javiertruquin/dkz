import BotonContactanos from "../components/BotonContactanos";
import BannerPrensa from "../components/Celular/Prensa/BannerPrensa";
import PrensaEscritorio from "../components/Escritorio/Prensa/PrensaEscritorio";
import { Radio } from "../components/Radio";
import PrensaBanner from "../components/PrensaBanner";
import TrabajosPrensa from "../components/TrabajosPrensa";
import PrensaContenido from "../components/PrensaContenido";

export default function Prensa() {
    return (
        <div>
            <PrensaBanner />
            <PrensaContenido />
        </div>
    );
}
