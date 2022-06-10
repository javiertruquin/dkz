import "./home.css";
import CartasEscritorio from "./CartasEscritorio";
import ImagenFrase from "./ImagenFrase";
import TrabajosEscritorio from "./TrabajosEscritorio";
import BannerEscritorio from "./BannerEscritorio";
import Banner2Escritorio from "./Banner2Escritorio";

export default function HomeContenidoEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerEscritorio />
            <Banner2Escritorio />
            <CartasEscritorio />
            <TrabajosEscritorio />
            <ImagenFrase />
        </div>
    );
}
