import { Image } from "react-bootstrap";


export default function BannerServicios() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
            <Image
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383018/banners/bannerhome_tsemde.jpg"
                    alt="Banner-escritorio"
                    fluid
                />
                <div className="banner-posi-servicio-escritorio ">
                    <div className="d-lg-none d-block">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            NUESTROS SERVICIOS
                        </p>
                        <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra">
                        En DKZ studio sabemos lo fundamental de Identificar estrategias,  herramientas y nuevas tecnologías para el diseño y ejecución de la publicidad de cada empresa. Por esto resulta imprescindible realizar campañas de marketing digital exitosas
                        </p>
                    </div>
                    <div className="d-none d-lg-block">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            NUESTROS SERVICIOS
                        </p>
                        <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
                        En DKZ studio sabemos lo fundamental de Identificar estrategias, herramientas y nuevas tecnologías <br/>  para el diseño y ejecución de la publicidad de cada empresa.<br/>  Por esto resulta imprescindible realizar campañas de marketing digital exitosas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
