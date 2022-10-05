import { Image } from "react-bootstrap";

export default function BannerServicios() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661973122/banners/bannersocialmedia_gcqdlo_1_hu3in4.jpg"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posi-servicio-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-servicios-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                SERVICIOS
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-servicios-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                SERVICIOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
