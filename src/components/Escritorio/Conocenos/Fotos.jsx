import React from "react";
import Foto from "./Foto";

const miembros = [
  {
    id: 1,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l1",
  },
  {
    id: 2,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l2",
  },
  {
    id: 3,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l3",
  },
  {
    id: 4,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 5,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 6,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 7,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 8,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 9,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 10,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 11,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
    nombre: "nombre",
    puesto: "puesto",
    linkendin: "l4",
  },
  {
    id: 12,
    foto: "https://i.pinimg.com/474x/5e/4a/e0/5e4ae02dc7ea1a878b4727b023e7f387.jpg",
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
