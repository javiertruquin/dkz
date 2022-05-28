import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import SitioConstruEscritorio from "../SitioConstruEscritorio";
import NavbarReact from "../../../components/NavbarReact";


export default function PrensaEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div className="d-none d-lg-block">
                <NavEscritorio />
            </div>
            <div className="d-lg-none d-block">
                <NavbarReact />
            </div>
            <div className="container">
                <SitioConstruEscritorio />
                <FooterEscritorio />
            </div>
        </div>
    );
}
