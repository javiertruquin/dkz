import "./socialmedia.css";
import BotonContactanos from "../../BotonContactanos";

export default function BannerSocialM() {
  return (
    <div className="color-azul-oscuro-fondo">
      <img
        className="banner-escritorio"
        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653692828/Home/banner-escritorio_fndswh.png"
        alt="Banner-escritorio"
      />
      <div className="banner-posi-marketing-escritorio">
        <div className="d-lg-none d-block">
          <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
            SOCIAL MEDIA
          </p>
          <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
            En DKZ studio sabemos lo fundamental de Identificar estrategias,
            <br /> herramientas y nuevas tecnologías para el diseño y ejecución
            de la publicidad
            <br /> de cada empresa. Por esto resulta imprescindible realizar
            campañas de marketing
            <br />
            digital exitosas y lograr un posicionamiento online acorde a la
            demanda de cada rubro.
          </p>
        </div>
        <div className="d-none d-lg-block">
          <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
          SOCIAL MEDIA
          </p>
          <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
            En DKZ studio sabemos lo fundamental de Identificar estrategias,
            <br /> herramientas y nuevas tecnologías para el diseño y ejecución
            de la publicidad
            <br /> de cada empresa. Por esto resulta imprescindible realizar
            campañas de marketing
            <br />
            digital exitosas y lograr un posicionamiento online acorde a la
            demanda de cada rubro.
          </p>
        </div>
        <BotonContactanos />
      </div>
    </div>
  );
}
