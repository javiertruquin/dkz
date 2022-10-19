import "./diseñografico.css";
import { Image } from "react-bootstrap";

export default function BannerDG() {
    return (
        <div className="color-azul-oscuro-fondo">
            <Image
                className="banner-escritorio"
                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666208384/banners/BannerDG_n4rmhz.png"
                alt="Banner-escritorio"
                fluid
            />
            <div className="banner-posi-dg-escritorio container">
                <div className="d-lg-none d-block ">
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            DISEÑO GRÁFICO
                        </p>
                    </div>
                </div>
                <div className="d-none d-lg-block">
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            DISEÑO GRÁFICO
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
