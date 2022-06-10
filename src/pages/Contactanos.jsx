import React from "react";
import FormContactanos from "../components/Celular/Contactanos/FormContactanos";
import ContactanosEscritorio from "../components/Escritorio/Contactanos/ContactanosEscritorio";

export default function Contactanos() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <FormContactanos />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ContactanosEscritorio />
            </div>
        </div>
    );
}
