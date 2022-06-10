import BotonContactanos from "../../BotonContactanos";
import TrabajosDiseñoGrafico from "../../TrabajosDiseñoGrafico";
import BannerDG from "./BannerDG";

export default function DiseñoGraficoEscritorio() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
                <BannerDG />
                <TrabajosDiseñoGrafico />
                <BotonContactanos />
            </div>
        </div>
    );
}
