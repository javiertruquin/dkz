import React from "react";
import RubberBand from "react-reveal/RubberBand";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartasEscritorio() {
  return (
    <div className="color-azul-oscuro-fondo ">
      <div>
        <div className="container">
          <h1 className="color-verde text-center my-4 peso-bold-italic tamaño-mas-grande mas-espaciado">
            {" "}
            Digital solutions
          </h1>
          <div className="d-flex flex-wrap justify-content-center">
            <RubberBand>
              <Card className="border-card color-blanco mx-4 my-4 card-digital-escritorio">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card-conocenos"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen my-2">
                  <Card.Title className="text-center">
                    <Link
                      className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                      to="/MarketingDigital"
                    >
                      Eventos
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>

            <RubberBand>
              <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card-conocenos"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="text-center my-2">
                    <Link
                      className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                      to="/MarketingDigital"
                    >
                      Marketing digital
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>

            <RubberBand>
              <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card-conocenos"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="text-center my-2">
                    <Link
                      className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                      to="/MarketingDigital"
                    >
                      Sitios web
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>

            <RubberBand>
              <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card-conocenos"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="text-center my-2">
                    <Link
                      className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                      to="/MarketingDigital"
                    >
                      Producción audiovisual
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>
            <RubberBand>
              <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card-conocenos"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="text-center">
                    <Link
                      className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                      to="/MarketingDigital"
                    >
                      Prensa
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>

            <RubberBand>
              <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card-conocenos"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="text-center">
                    <Link
                      className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                      to="/MarketingDigital"
                    >
                      Consultoría
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>

            <RubberBand>
              <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card-conocenos"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="text-center mt-2">
                    <Link
                      className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                      to="/MarketingDigital"
                    >
                      Marketing de contenidos
                    </Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>
          </div>
        </div>
      </div>
    </div>
  );
}
