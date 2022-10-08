import "./socialmedia.css";
import { Image } from "react-bootstrap";

export default function BannerSocialM() {
  return (
    <div className="color-azul-oscuro-fondo">
      <Image
        className="banner-escritorio"
        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383015/banners/bannersocialmedia_gcqdlo.jpg"
        alt="Banner-escritorio"
        fluid
      />
      <div className="banner-posi-social-escritorio container">
        <div className="d-lg-none d-block">
          <div className="d-flex justify-content-center align-items-center">
            <p className="titulos-impacto margen-negativo2 px-5 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              SOCIAL MEDIA
            </p>
          </div>
        </div>
        <div className="d-none d-lg-block">
          <div className="d-flex justify-content-center align-items-center">
            <p className="titulos-impacto margen-negativo2 px-5 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              SOCIAL MEDIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
