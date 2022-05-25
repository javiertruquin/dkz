import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonContactoAV() {
  return (
    <div className="d-flex justify-content-center">
          <div className=" my-4 d-flex justify-content-center">
        <div className="boton-verde">
          <p   className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-medio">
          <Nav.Link as={Link} to="/Contactanos"> <span className="text-dark">Contactanos</span></Nav.Link> 
          </p>
        </div>
      </div>
    </div>
  );
}
