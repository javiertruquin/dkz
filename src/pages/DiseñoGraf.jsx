import BannerDiseñoGrafico from "../components/Celular/DiseñoGrafico/BannerDiseñoGrafico";
import DiseñoGraficoEscritorio from "../components/Escritorio/DiseñoGrafico/DiseñoGraficoEscritorio";

export default function DiseñoGraf() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerDiseñoGrafico />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <DiseñoGraficoEscritorio />
            </div>
        </div>
    );
}
