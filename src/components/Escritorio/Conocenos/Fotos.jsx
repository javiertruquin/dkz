import React from "react";
import Foto from "./Foto";

const miembros = [
  {
    id: 1,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506767/Utilidades/3c_udklsr.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l1",
  },
  {
    id: 2,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l2",
  },
  {
    id: 3,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l3",
  },
  {
    id: 4,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 5,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 6,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 7,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 8,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 9,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 10,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 11,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 12,
    foto: "https://res.cloudinary.com/dlzcbrqax/image/upload/v1655506768/Utilidades/1c_pxnhrg.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
];

export default function Fotos() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {miembros.map((miembro, id) => (
          <Foto key={id} uerta data={miembro} />
        ))}
      </div>
    </div>
  );
}
