import BannerConsultaria from "./BannerConsultaria";
import "./consultoria.css"

export default function ConsultoriaEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                <BannerConsultaria />
            </div>
        </div>
    );
}
