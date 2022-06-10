import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import NavbarReact from "../../../components/NavbarReact";
import BannerConsultaria from "./BannerConsultaria";

export default function ConsultoriaEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                <BannerConsultaria />
            </div>
        </div>
    );
}
