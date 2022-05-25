import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TrabajosEscritorio() {
  return (
    <div className="mt-5">
      <div>
        <h1 className="peso-bold-italic tamaño-grande text-white text-center">
          Mira algunos de nuestros trabajos y descubrí lo que somos <br />  {" "}
          capaces de hacer con tu marca.
        </h1>
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <div className="boton-verde">
          <p className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-medio">
          <Nav.Link as={Link} to="/MindBlown"> <span className="text-dark">Mind Blown</span></Nav.Link> 
          </p>
        </div>
      </div>
    </div>
  );
}
