import React from "react";
import RubberBand from "react-reveal/RubberBand";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartasEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo mb-5 pt-2">
            <div>
                <div className="container">
                    <p className=" text-center my-4 tamaño-mas-grande mas-espaciado mt-5">
                        <span className="mx-2 color-verde">
                            DIGITAL
                        </span>
                        <span className="peso-bold-italic color-verde-claro ">
                            SOLUTIONS
                        </span>
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                        <RubberBand>
                            <Card className="border-card color-blanco mx-4 my-4 card-digital-escritorio">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        className="imagen-card-conocenos"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_sqJ4tLBiurw_yeyos1.png"
                                        alt="eventos"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/Eventos"
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
                                        className="imagen-card-conocenos"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                                        alt="marketing digital"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-center">
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
                                        className="imagen-card-conocenos"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_8qEB0fTe9Vw_yxqr4y.png"
                                        alt="Sitios web"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/SitiosWeb"
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
                                        className="imagen-card-conocenos"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_4D-Q5INzhZE_iyo0vq.png"
                                        alt="Producción audiovisual"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/Audiovisual"
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
                                        className="imagen-card-conocenos"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_BcR77nBURV8_miaada.png"
                                        alt="Prensa"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/Prensa"
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
                                        className="imagen-card-conocenos"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_m2TU2gfqSeE_gmwapk.png"
                                        alt="Consultoría"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-center d-flex justify-content-center align-items-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta mb-"
                                            to="/Consultoria"
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
                                        className="imagen-card-conocenos"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653499629/Home/unsplash_8qEB0fTe9Vw_ykmlma.png"
                                        alt="Marketing de contenidos"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-center align-items-center">
                                    <Card.Title className="text-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/MarketingContenidos"
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
