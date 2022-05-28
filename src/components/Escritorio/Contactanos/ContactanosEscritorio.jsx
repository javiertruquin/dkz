import "./contactanos.css";
import FooterEscritorio from "../FooterEscritorio";
import IconosEscritorio from "../IconosEscritorio";
import NavEscritorio from "../NavEscritorio";
import FormularioContactoEscritorio from "./FormularioContactoEscritorio";
import NavbarReact from "../../../components/NavbarReact";

export default function ContactanosEscritorio() {
    return (
        <div className="fixed-contactanos-esc">
            <div className="d-none d-lg-block">
                <NavEscritorio />
            </div>
            <div className="d-lg-none d-block">
                <NavbarReact />
            </div>
            <div className="fixed-contact-form">
                <FormularioContactoEscritorio />
            </div>
            <IconosEscritorio />
            <hr className="bg-white container" />
            <FooterEscritorio />
        </div>
    );
}
