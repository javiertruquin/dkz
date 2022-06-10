import ServiciosEscritorio from "../components/Escritorio/Servicio/ServiciosEscritorio";
import BannerServicios from "../components/Celular/Servicios/BannerServicios";

export default function Conocenos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerServicios />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ServiciosEscritorio />
            </div>
        </div>
    );
}
