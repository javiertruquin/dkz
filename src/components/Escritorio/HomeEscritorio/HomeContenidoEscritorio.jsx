import "./home.css";
import CartasEscritorio from "./CartasEscritorio";
import ImagenFrase from "./ImagenFrase";
import TrabajosEscritorio from "./TrabajosEscritorio";

export default function HomeContenidoEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <CartasEscritorio />
            <TrabajosEscritorio />
            <ImagenFrase />
        </div>
    );
}
