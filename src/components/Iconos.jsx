import React from "react";
import { Image } from "react-bootstrap";
import wsp from "../assets/icons/wsp.svg";
import face from "../assets/icons/face.svg";
import linken from "../assets/icons/linken.svg";
import ig from "../assets/icons/ig.svg";
import Contacto from "./Contacto";

export default function Iconos() {
  return (
    <div className="color-azul-oscuro-fondo color-violeta container">
      <div className="text-center">
        <a href="https://wa.link/051p9f" target="_blank" rel="noreferrer">
          <Image
            className="iconos mx-2 mt-4 mb-4"
            src={wsp}
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
            src={face}
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
            src={ig}
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
            src={linken}
            fluid
            alt="icono-linken"
          />
        </a>
      </div>
      <Contacto />
    </div>
  );
}
