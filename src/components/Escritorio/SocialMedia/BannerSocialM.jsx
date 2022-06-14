import "./socialmedia.css";

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
          Desarrollamos estrategias personalizadas para tu empresa. Ponemos creatividad y compromiso <br/> a la hora de ejecutar proyectos digitales, basándonos en una marcada trayectoria a la hora de generar contenidos. <br/> Desarrollamos campañas y acciones específicas a través de las plataformas y canales de redes sociales <br/> de acuerdo con la estrategia global de la empresa. Una estrategia social eficaz puede ayudar a hacer crecer tu negocio  <br/>y crear un compromiso con el público. Creando estrategias, creando HISTORIAS.  
          </p>
        </div>
        <div className="d-none d-lg-block">
          <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
          SOCIAL MEDIA
          </p>
          <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
          Desarrollamos estrategias personalizadas para tu empresa. Ponemos creatividad y compromiso <br/> a la hora de ejecutar proyectos digitales, basándonos en una marcada trayectoria a la hora de generar contenidos. <br/> Desarrollamos campañas y acciones específicas a través de las plataformas y canales de redes sociales <br/> de acuerdo con la estrategia global de la empresa. Una estrategia social eficaz puede ayudar a hacer crecer tu negocio  <br/>y crear un compromiso con el público. Creando estrategias, creando HISTORIAS. 
          </p>
        </div>
      </div>
    </div>
  );
}
