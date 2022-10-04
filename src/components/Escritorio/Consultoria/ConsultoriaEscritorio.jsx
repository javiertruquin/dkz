import BotonContactanos from "../../BotonContactanos";
import BannerConsultaria from "./BannerConsultaria";
import "./consultoria.css";

export default function ConsultoriaEscritorio() {
  return (
    <div className="color-azul-oscuro-fondo">
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <BannerConsultaria />
        <div className="d-flex justify-content-center d-lg-none d-block ">
          <div>
          <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
              Nos enfocamos en el requerimiento del cliente, brindando
              soluciones alternativas y eficaces, <br /> que ayuden a consolidar
              el esquema de trabajo y los objetivos internos de una compañía.
            </p>
          </div>
      
          
        </div>
        <div className="d-lg-none d-block">
          <ul className="tamaño-medio peso-italic text-white espaciado texto-sombra">
            <li>Consultoría y asesoramiento estratégico</li>
            <li>Consultoría y asesoramiento en marketing y comercialización</li>
            <li>Consultoría y asesoramiento económico - financiero</li>
            <li>
              Consultoría y asesoramiento en organización y recursos humanos.
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center d-none d-lg-block pt-5 mx-auto">
          <div>
          <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
              Nos enfocamos en el requerimiento del cliente, brindando
              soluciones alternativas y eficaces, <br /> que ayuden a consolidar
              el esquema de trabajo y los objetivos internos de una compañía.
            </p>

          </div>
          <div>
          <ul className="tamaño-grande peso-italic text-white espaciado texto-sombra">
            <li>Consultoría y asesoramiento estratégio</li>
            <li>Consultoría y asesoramiento en marketing y comercialización</li>
            <li>Consultoría y asesoramiento económico - financiero</li>
            <li>
              Consultoría y asesoramiento en organización y recursos humanos.
            </li>
          </ul>
      </div>
          
        </div>
        <BotonContactanos />
      </div>
    </div>
  );
}
