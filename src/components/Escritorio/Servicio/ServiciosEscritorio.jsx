import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import SitioConstruEscritorio from "../SitioConstruEscritorio";
import NavbarReact from "../../../components/NavbarReact";

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
                <SitioConstruEscritorio />
                <FooterEscritorio />
            </div>
        </div>
    );
}
