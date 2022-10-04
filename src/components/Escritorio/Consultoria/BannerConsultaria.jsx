import { Image } from "react-bootstrap";

export default function BannerConsultaria() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383014/banners/bannerconsultoria_1_jjq9nb.jpg"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posi-consultoria-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-consultoria-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                CONSULTORÍA
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-consultoria-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                CONSULTORÍA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
