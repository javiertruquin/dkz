import React from "react";
import { Image } from "react-bootstrap";
import { Fade } from "react-reveal";

export default function ImagenFrase() {
    return (
        <div>
            <div className="d-none d-sm-block">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center">
                        <div>
                            <Image
                                className="px-2"
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653501827/Home/dkzbanner_walgxe.png"
                                fluid
                                alt="DKZ"
                            />
                        </div>
                        <div className="text-white d-flex justify-content-center ms-xxl-5 mx-auto me-auto my-auto">
                            <div className="d-flex justify-content-center">
                                <div className="efecto-blur-card heading">
                                    <div className="m-4 ">
                                        <p className="peso-italic text-white text-center tamaño-grande mb-0 ">
                                            “Aquellos que están lo
                                            suficientemente <br />
                                            locos para creer que pueden cambiar{" "}
                                            <br />
                                            el mundo son quienes lo cambian”{" "}
                                            <br />
                                            <span className="container d-flex justify-content-end tamaño-grande my-3 me-5">
                                                Steve Jobs{" "}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-sm-none d-block">
                <Fade>
                    <div className="color-azul-oscuro-fondo text-center mt-3">
                        <Image
                            className="w-100"
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653612798/Home/DKZMobile2_wcdjkq.png"
                            fluid
                            alt="DKZ-banner"
                        />
                    </div>
                </Fade>
                <div className="color-azul-oscuro-fondo mx-auto">
                    <div className="d-flex justify-content-center">
                        <div className="efecto-blur-card mt-5 mx-2 heading">
                            <div className="m-3">
                                <p className="peso-italic text-white text-center tamaño-medio ">
                                    “Aquellos que están lo suficientemente{" "}
                                    <br />
                                    locos para creer que pueden cambiar <br />
                                    el mundo son quienes lo cambian”
                                    <span className="d-flex justify-content-end tamaño-chico mx-3">
                                        Steve Jobs{" "}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
