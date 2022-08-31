import { Image } from "react-bootstrap";
import BotonContactanos from "../../BotonContactanos";

export default function BannerEscritorio() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
                <Image
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383015/banners/bannersocialmedia_gcqdlo.jpg"
                    alt="Banner-escritorio"
                    fluid
                />
                <div className="banner-posi-escritorio">
                    <div className="d-lg-none d-block">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            LLEVA TUS IDEAS A UN LUGAR QUE NUNCA IMAGINASTE
                        </p>
                    </div>
                    <div className="d-none d-lg-block">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            LLEVA TUS IDEAS A UN LUGAR QUE NUNCA IMAGINASTE
                        </p>
                    </div>
                    <BotonContactanos />
                </div>
            </div>
        </>
    );
}
