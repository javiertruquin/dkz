import React from "react";
import { FaLinkedin} from "react-icons/fa";

export default function Foto({ data }) {
  const { foto, nombre, puesto, linkendin } = data;
  return (
    <div className="box my-2">
      <div className="caja">
        <div className="imgBx">
          <img src={foto} alt="images" />
        </div>
        <div className="details ">
          <h2 className="tamaño-grande">
            {nombre}
            <br />
            <div className="tamaño-medio">
              <span >
                {puesto} <a href={linkendin}>  <FaLinkedin /></a>
              </span>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
