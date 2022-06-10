import "./servicios.css";
import BannerServicios from "./BannerServicios";
import CartasEscritorio from "../HomeEscritorio/CartasEscritorio";

export default function ServiciosEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerServicios />
            <CartasEscritorio />
        </div>
    );
}
