import React from "react";
import BotonContactanos from "../../BotonContactanos";

export default function BannerEventos() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <img
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653692828/Home/banner-escritorio_fndswh.png"
          alt="Banner-escritorio"
        />
        <div className="banner-posi-eventos-escritorio">
          <div className="d-lg-none d-block">
            <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              EVENTOS DKZ
            </p>
            <p className="tamaño-mas-grande peso-italic text-white text-center espaciado texto-sombra">
            Ponemos a tu disposición un equipo de profesionales los cuales son capaces
              <br /> de ejecutar y accionar eventos de gran envergadura de acuerdo a los mas
              <br /> altos estándares de calidad organizativa y estilo.
            </p>
          </div>
          <div className="d-none d-lg-block">
            <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              EVENTOS DKZ
            </p>
            <p className="tamaño-mas-grande peso-italic text-white text-center espaciado texto-sombra">
            Ponemos a tu disposición un equipo de profesionales los cuales son capaces
              <br /> de ejecutar y accionar eventos de gran envergadura de acuerdo a los mas
              <br /> altos estándares de calidad organizativa y estilo.
            </p>
          </div>
          <BotonContactanos />
        </div>
      </div>
    </div>
  );
}
