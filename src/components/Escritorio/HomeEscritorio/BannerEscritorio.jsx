import { Image } from "react-bootstrap";
import BotonContactanos from "../../BotonContactanos";

export default function BannerEscritorio() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <div className="fondo-banner">
          <div className="centrado">
            <div className="d-lg-none d-block">
              <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                LLEVA TUS IDEAS A UN LUGAR QUE NUNCA IMAGINASTE
              </p>
            </div>
            <div className="d-none d-lg-block ">
              <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                LLEVA TUS IDEAS A UN LUGAR QUE NUNCA IMAGINASTE
              </p>
            </div>
            <BotonContactanos />
          </div>
        </div>
      </div>
    </div>
  );
}
