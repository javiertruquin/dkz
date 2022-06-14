import BotonContactanos from "../../BotonContactanos";

export default function BannerConsultaria() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <img
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653692828/Home/banner-escritorio_fndswh.png"
          alt="Banner-escritorio"
        />
        <div className="banner-posi-consultoria-escritorio">
          <div className="d-lg-none d-block">
            <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              CONSULTORÍA
            </p>
            <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
              Nos enfocamos en el requerimiento del cliente, brindando
               soluciones alternativas y eficaces, <br /> que ayuden a consolidar
              el esquema de trabajo y los objetivos internos de una compañía.
            </p>
            <div className="d-flex justify-content-center">
              <ul className="tamaño-medio peso-italic text-white espaciado texto-sombra">
                <li>Consultoría y asesoramiento estratégico</li>
                <li>Consultoría y asesoramiento en marketing y comercialización</li>
                <li>Consultoría y asesoramiento económico - financiero</li>
                <li>Consultoría y asesoramiento en organización y recursos humanos.</li>
              </ul>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              CONSULTORÍA
            </p>
            <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
            Nos enfocamos en el requerimiento del cliente, brindando
               soluciones alternativas y eficaces, <br /> que ayuden a consolidar
              el esquema de trabajo y los objetivos internos de una compañía.
            </p>
            <div className="d-flex justify-content-center">
              <ul className="tamaño-grande peso-italic text-white espaciado texto-sombra">
                <li>Consultoría y asesoramiento estratégico</li>
                <li>Consultoría y asesoramiento en marketing y comercialización</li>
                <li>Consultoría y asesoramiento económico - financiero</li>
                <li>Consultoría y asesoramiento en organización y recursos humanos.</li>
              </ul>
            </div>
          </div>
          <BotonContactanos />
        </div>
      </div>
    </div>
  );
}
