import "./socialmedia.css";
import { Image } from "react-bootstrap";

export default function BannerSocialM() {
  return (
    <div className="color-azul-oscuro-fondo">
      <Image
        className="banner-escritorio"
        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383015/banners/bannersocialmedia_gcqdlo.jpg"
        alt="Banner-escritorio"
        fluid
      />
      <div className="banner-posi-social-escritorio">
        <div className="d-lg-none d-block">
          <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
            SOCIAL MEDIA
          </p>
          <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra px-2">
          Desarrollamos estrategias personalizadas para tu empresa. Ponemos creatividad y compromiso  a la hora de ejecutar proyectos digitales, basándonos en una marcada trayectoria a la hora de generar contenidos.  Desarrollamos campañas y acciones específicas a través de las plataformas y canales de redes sociales  de acuerdo con la estrategia global de la empresa. Una estrategia social eficaz puede ayudar a hacer crecer tu negocio y crear un compromiso con el público. Creando estrategias, creando HISTORIAS.  
          </p>
        </div>
        <div className="d-none d-lg-block">
          <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
          SOCIAL MEDIA
          </p>
          <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra px-5">
          Desarrollamos estrategias personalizadas para tu empresa. Ponemos creatividad y compromiso a la hora de ejecutar proyectos digitales, basándonos en una marcada trayectoria a la hora de generar contenidos. Desarrollamos campañas y acciones específicas a través de las plataformas y canales de redes sociales de acuerdo con la estrategia global de la empresa. Una estrategia social eficaz puede ayudar a hacer crecer tu negocio y crear un compromiso con el público. Creando estrategias, creando HISTORIAS. 
          </p>
        </div>
      </div>
    </div>
  );
}
