import React from "react";
import { Image } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

export default function Foto({ data }) {
  const { foto, nombre, puesto, linkendin } = data;
  return (
    <div className="box my-2">
      <div className="caja">
        <div className="imgBx">
          <Image src={foto} alt="images" fluid />
        </div>
        <div className="details ">
          <h2 className="tamaño-grande">
            {nombre}
            <br />
            <div className="tamaño-medio">
              <span>
                {puesto} <br />{" "}
                <a href={linkendin} target="_blank" rel="noreferrer">
                  {" "}
                  <FaLinkedin />
                </a>
              </span>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
