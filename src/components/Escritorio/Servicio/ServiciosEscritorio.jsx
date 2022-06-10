import "./servicios.css";

import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import NavbarReact from "../../../components/NavbarReact";
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
