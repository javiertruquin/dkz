import React from "react";
import Foto from "./Foto";

const miembros = [
  {
    id: 1,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506767/Utilidades/3c_udklsr.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 2,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 3,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 4,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 5,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 6,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 7,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 8,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 9,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 10,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 11,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
  {
    id: 12,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "https://www.linkedin.com/",
  },
];

export default function Fotos() {
  return (
    <div className="container pt-5 my-5">
      <div className="d-flex flex-wrap justify-content-center">
        {miembros.map((miembro, id) => (
          <Foto key={id} uerta data={miembro} />
        ))}
      </div>
    </div>
  );
}
