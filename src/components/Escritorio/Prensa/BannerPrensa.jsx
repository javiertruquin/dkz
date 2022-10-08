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
        <div className="banner-posi-eventos-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto margen-negativo2 pading-extra -prensa-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                PRENSA
              </p>
            </div>
            {/* <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
              Enterate de todas y cada una de nuestras principales hazañas como
              equipo
              <br /> Somos energia, somos dkz
            </p> */}
            <p className="tamaño-mas-grande peso-bold-italic text-white d-flex justify-content-center  espaciado texto-sombra posi-eventos-escritorio">
              Artículos destacados
            </p>
           
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className=" titulos-impacto margen-negativo2 pading-extra -prensa-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                PRENSA
              </p>
            </div>
            {/* <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
              Enterate de todas y cada una de nuestras principales hazañas como
              equipo
              <br /> Somos energia, somos dkz
            </p> */}
            <p className=" tamaño-mas-grande peso-bold-italic text-white d-flex justify-content-center  espaciado texto-sombra posi-eventos-escritorio">
                Artículos destacados
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
