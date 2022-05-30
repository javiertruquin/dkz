import "./sitios.css"
import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import NavbarReact from "../../../components/NavbarReact";
import BannerSitiosWeb from "./BannerSitiosWeb";

export default function SitiosWebsEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div className="d-none d-lg-block">
                <NavEscritorio />
            </div>
            <div className="d-lg-none d-block">
                <NavbarReact />
            </div>
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                <BannerSitiosWeb />
                <FooterEscritorio />
            </div>
        </div>
    );
}
