import "./diseñografico.css";
import { Image } from "react-bootstrap";

export default function BannerDG() {
  return (
    <div className="color-azul-oscuro-fondo">
      <Image
        className="banner-escritorio"
        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383014/banners/bannerdg_qtegv2.jpg"
        alt="Banner-escritorio"
        fluid
      />
      <div className="banner-posi-dg-escritorio container">
        <div className="d-lg-none d-block ">
          <div className="d-flex justify-content-center">
            <p className="titulos-impacto-dg-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              DISEÑO GRÁFICO
            </p>
          </div>
         
        </div>
        <div className="d-none d-lg-block">
          <div className="d-flex justify-content-center">
            <p className="titulos-impacto-dg-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              DISEÑO GRÁFICO
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}
