import "./contactanos.css";
import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import FormularioContactoEscritorio from "./FormularioContactoEscritorio";
import NavbarReact from "../../../components/NavbarReact";

export default function ContactanosEscritorio() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <FormularioContactoEscritorio />
        </div>
    );
}
