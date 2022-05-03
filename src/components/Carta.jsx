import React from "react";
import { Card } from "react-bootstrap";


export default function Carta({ data }) {
  const { image, title } = data;
  return (
    <div>
      <div className="mx-1 mb-3">
        <Card className="border-card color-blanco my-4 card-digital">
          <div className="d-flex justify-content-center">
            <Card.Img
              variant="top"
              className="imagen-card"
              src={image}
              alt="iconos solución digital"
            />
          </div>
          <Card.Body className="efecto-imagen">
            <Card.Title className="peso-bold-italic color-violeta text-center mt-3 p-1">
              {title}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
