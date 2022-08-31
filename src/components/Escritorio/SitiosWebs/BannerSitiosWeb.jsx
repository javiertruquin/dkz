import { Image } from "react-bootstrap";
import "./sitios.css"
export default function BannerSitiosWeb() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
            <Image
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661390148/banners/bannnersitioweb_lga5ja.jpg"
                    alt="Banner-escritorio"
                    fluid
                />
                <div className="banner-posi-sitio-escritorio container">
                    <div className="d-lg-none d-block">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra ">
                        SITIOS WEBS
                        </p>
                        <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra px-5">
                        Trabajamos sobre cada uno de nuestros desarrollos de manera exclusiva. Nuestras ideas parten desde una concepción inicial en la cual implementamos todos nuestros proyectos desde cero, sin utilización de contenidos realizados por terceros o código fuente reutilizable de otros trabajos, para DKZ cada cliente es un nuevo desafío.
                        </p>
                    </div>
                    <div className="d-none d-lg-block">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                        SITIOS WEBS
                        </p>
                        <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra px-5">
                        Trabajamos sobre cada uno de nuestros desarrollos de manera exclusiva. Nuestras ideas parten desde una concepción inicial en la cual implementamos todos nuestros proyectos desde cero, sin utilización de contenidos realizados por terceros o código fuente reutilizable de otros trabajos, para DKZ cada cliente es un nuevo desafío.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
