import { Image } from "react-bootstrap";

export default function BannerEventos() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383015/banners/bannereventos_hnxjbn.jpg"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posi-eventos-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-eventos-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                EVENTOS DKZ
              </p>
            </div>
            
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <p className=" titulos-impacto-eventos-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                EVENTOS DKZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
