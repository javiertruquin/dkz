import "./servicios.css";
import BannerServicios from "./BannerServicios";
// import CartasEscritorio from "../HomeEscritorio/CartasEscritorio";
import BotonContactanos from "../../BotonContactanos";
import TextoServicios from "./TextoServicios";

export default function ServiciosEscritorio() {
  return (
    <div className="color-azul-oscuro-fondo">
          <BannerServicios />
          <TextoServicios />
      {/* <CartasEscritorio /> */}
      <BotonContactanos />
    </div>
  );
}
