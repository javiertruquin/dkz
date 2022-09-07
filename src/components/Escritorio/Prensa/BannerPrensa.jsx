import { Image } from "react-bootstrap";

export default function BannerPrensa() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383018/banners/bannerprensa_g4c57j.jpg"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posi-prensa-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                PRENSA
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                PRENSA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
