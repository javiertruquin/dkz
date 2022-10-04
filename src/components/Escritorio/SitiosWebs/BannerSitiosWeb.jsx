import { Image } from "react-bootstrap";
import "./sitios.css";
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
            <div className="d-flex justify-content-center pb-5">
              <p className="titulos-impacto-sitios-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra ">
                SITIOS WEBS
              </p>
            </div>
           
          </div>
          <div className="d-none d-lg-block pb-5">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-sitios-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                SITIOS WEBS
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
