import React from "react";
import { Image } from "react-bootstrap";

export default function FooterAV() {
  return (
    <div className="container">
      <div className="color-azul-oscuro-fondo d-flex justify-content-between text-white  ">
        <div className="text-white mt-4">
          <Image
            className=""
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/logo-dkz_1_sntx9w.png"
            fluid
            alt="logo"
          />
        </div>
        <div className="text-white text-center mt-4 mb-4 tamaño-chico ms-5">
          <div>info.dkzstudio@gmail.com | 381 66 79 511</div>
          <div>Córdoba 714, 1° B - San Miguel de Tucumán</div>
          <div>Tucumán - Argentina</div>
        </div>
        <div className="text-white mt-4 mb-4 tamaño-chico">
          <span className="d-flex justify-content-end">Copyright © 2022</span>
          <span className="d-flex justify-content-end my-1">
            Todos los derechos reservados.
          </span>
          <span className="d-flex justify-content-end my-1">
            Product by DKZ studio
          </span>
        </div>
      </div>
    </div>
  );
}
