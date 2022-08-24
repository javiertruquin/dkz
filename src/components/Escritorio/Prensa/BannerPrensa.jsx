import { Image } from "react-bootstrap";

export default function BannerPrensa() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661374642/Prensa/bannerprensa-min_eefvjy.jpg"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posi-prensa-escritorio">
          <div className="d-lg-none d-block">
            <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              PRENSA
            </p>
          </div>
          <div className="d-none d-lg-block">
            <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              PRENSA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
