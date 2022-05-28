import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import SitioConstruEscritorio from "../SitioConstruEscritorio";
import NavbarReact from "../../../components/NavbarReact";

export default function MarketingDigitalEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div className="d-none d-lg-block">
                <NavEscritorio />
            </div>
            <div className="d-lg-none d-block">
                <NavbarReact />
            </div>
                <SitioConstruEscritorio />
                <FooterEscritorio />
        </div>
    );
}
