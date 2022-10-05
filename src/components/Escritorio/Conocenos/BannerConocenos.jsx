import { Image } from "react-bootstrap";

export default function BannerConocenos() {
  return (
    <>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653705291/conocenos/Group_54_4_jfmc3t.png"
          alt="Banner-escritorio"
          fluid
        />
      </div>
      <div className="d-flex justify-content-center">
          <p className=" titulos-impacto-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
            +20 PROFESIONALES <br />  A TU DISPOSICIÓN 
          </p>
        </div>
    </>
  );
}
