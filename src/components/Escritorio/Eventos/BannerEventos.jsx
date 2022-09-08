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
              <p className="titulos-impacto-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                EVENTOS DKZ
              </p>
            </div>
            <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
              Ponemos a tu disposición un equipo de profesionales los cuales son
              capaces
              <br /> de ejecutar y accionar eventos de gran envergadura de
              acuerdo a los mas
              <br /> altos estándares de calidad organizativa y estilo.
            </p>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <p className=" titulos-impacto-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                EVENTOS DKZ
              </p>
            </div>
            <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
              Ponemos a tu disposición un equipo de profesionales los cuales son
              capaces
              <br /> de ejecutar y accionar eventos de gran envergadura de
              acuerdo a los mas
              <br /> altos estándares de calidad organizativa y estilo.
            </p>
            <div className="pt-5 container">
              <div className="row text-white">
                <div className="col-12 col-sm-6">
                  <p className="tamaño-mas-grande peso-bold-italic text-white d-flex justify-content-center  espaciado texto-sombra posi-eventos-escritorio">
                    Nuestro equipo se caracteriza:
                  </p>
                  <p className="tamaño-grande peso-italic text-white  d-flex justify-content-center espaciado texto-sombra">
                    - Capacidad de liderazgo, trabajo en equipo y planificación
                    <br /> - Visión del entorno y el contexto
                    <br /> - Habilidades comunicacionales, empáticas y
                    negociadoras
                  </p>
                </div>
                <div className="col-12 col-sm-6">
                  <p className="tamaño-mas-grande peso-bold-italic text-white d-flex justify-content-center   espaciado texto-sombra posi-eventos-escritorio">
                    Nuestros Eventos:
                  </p>
                  <p className="tamaño-grande peso-italic text-white  d-flex justify-content-center espaciado texto-sombra">
                    -Eventos empresariales, Eventos sociales
                    <br /> -Conciertos y espectáculos
                    <br /> -Lanzamientos de marcas, productos o servicios
                    <br /> -Feria y exhibiciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
