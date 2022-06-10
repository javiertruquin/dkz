import "./prensa.css";
import FooterEscritorio from "../FooterEscritorio";
import BannerPrensa from "./BannerPrensa";

export default function PrensaEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerPrensa />
            <FooterEscritorio />
        </div>
    );
}
