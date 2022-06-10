import PrensaEscritorio from "../components/Escritorio/Prensa/PrensaEscritorio";
import BannerPrensa from "../components/Celular/Prensa/BannerPrensa";

export default function Prensa() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerPrensa />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <PrensaEscritorio />
            </div>
        </div>
    );
}
