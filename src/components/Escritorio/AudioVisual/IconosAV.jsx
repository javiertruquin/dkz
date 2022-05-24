import React from "react";
import { Image } from "react-bootstrap";


export default function IconosAV() {
  return (
    <div className="color-azul-oscuro-fondo color-violeta container my-4 ">
    <div className="text-center">
      <a href="https://wa.link/051p9f" target="_blank" rel="noreferrer">
        <Image
          className="iconos mx-2 mt-4 mb-4"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653428981/iconos/wsp_u3xuns.svg"
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
          className="iconos mx-2 mt-4 mb-4"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653428981/iconos/face_mspmlr.svg"
          fluid
          alt="icono-facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/dkzstudio/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="iconos mx-2 mt-4 mb-4"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653428981/iconos/ig_irwpus.svg"
          fluid
          alt="icono-instagram"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/dkzstudio/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="iconos mx-2 mt-4 mb-4"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653428981/iconos/linken_nchat1.svg"
          fluid
          alt="icono-linken"
        />
      </a>
    </div>
  </div>
  )
}
