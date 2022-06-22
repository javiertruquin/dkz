import BotonContactanos from "../components/BotonContactanos";
import HappyEndingCards from "../components/Celular/HappyEnding/HappyEndingCards";
import HappyEndingCardsEscritorio from "../components/Escritorio/HappyEnding/HappyEndingCardsEscritorio";

export default function HappyEnding() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "72vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <HappyEndingCards />
                <BotonContactanos />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <HappyEndingCardsEscritorio />
                <BotonContactanos />
            </div>
        </div>
    );
}
