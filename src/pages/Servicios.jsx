import ServiciosEscritorio from "../components/Escritorio/Servicio/ServiciosEscritorio";
import BannerServicios from "../components/Celular/Servicios/BannerServicios";
import Cartas from "../components/Celular/HomeCel/Cartas";

export default function Conocenos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerServicios />
                <Cartas />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ServiciosEscritorio />
            </div>
        </div>
    );
}
