import "./servicios.css";

import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import NavbarReact from "../../../components/NavbarReact";
import BannerServicios from "./BannerServicios";
import CartasEscritorio from "../HomeEscritorio/CartasEscritorio";

export default function ServiciosEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div className="d-none d-lg-block">
                <NavEscritorio />
            </div>
            <div className="d-lg-none d-block">
                <NavbarReact />
            </div>
            <div
                className=" d-flex flex-column"
                style={{ minHeight: "100vh" }}
            >
                <BannerServicios />
                <CartasEscritorio />
                <FooterEscritorio />
            </div>
        </div>
    );
}
