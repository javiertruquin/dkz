import React from "react";
import { Image } from "react-bootstrap";

export default function Iconos() {
  return (
    <div className="color-azul-oscuro-fondo color-violeta container my-4 ">
      <div className="text-center">
        <a href="https://wa.link/051p9f" target="_blank" rel="noreferrer">
          <Image
            className="mx-2 mt-4 mb-4 "
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653504540/iconos/Group_41_bjbdxc.svg"
            fluid
            alt="icono-wsp"
          />
        </a>
        <a
          href="https://www.facebook.com/agenciadkz"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className=" mx-2 mt-4 mb-4"
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653504540/iconos/Group_16_wi7o8y.svg"
            fluid
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/dkzstudio/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="mx-1 mt-4 mb-4"
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653504540/iconos/Group_17_o5fxhf.svg"
            fluid
            alt="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/dkzstudio/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="mx-2 mt-4 mb-4"
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653504540/iconos/Group_22_vigldu.svg"
            fluid
            alt="linken"
          />
        </a>
      </div>
      <div className="color-azul-oscuro-fondo">
        <div className="text-white d-flex peso-regular tamaño-chico justify-content-center p-2">
          <span>info.dkzstudio@gmail.com | 381 66 79 511</span>
        </div>
        <div className="text-white d-flex peso-regular tamaño-chico justify-content-center p-2">
          <span>Córdoba 714, 1° B - San Miguel de Tucumán</span>
        </div>
        <div className="text-white d-flex peso-regular tamaño-chico justify-content-center p-2">
          <span>Tucumán - Argentina</span>
        </div>
      </div>
    </div>
  );
}
