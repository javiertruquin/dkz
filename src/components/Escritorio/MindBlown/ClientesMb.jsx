import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ClientesMb() {
  return (
    <>
      {/* FILA #1 */}
      <div className="text-white text-center peso-bold-italic tamaño-grande">
        <p>Clientes felices</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
          </div>
          <div className="d-flex justify-content-center">
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
          <img
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
            alt=""
          />
        </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
        <div className=" my-4 d-flex justify-content-center">
          <div className="boton-verde">
            <p className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-medio">
              <Nav.Link as={Link} to="/Contactanos">
                {" "}
                <span className="text-dark">Contactanos</span>
              </Nav.Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
