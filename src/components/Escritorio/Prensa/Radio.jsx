import React from "react";
import { Image } from "react-bootstrap";

export const Radio = () => {
    return (
        <div className="mb-5">
            <div className=" d-lg-none d-block ">
                <div className="container">
                    <div className="text-white">
                        <div className="d-flex">
                            <Image
                                className="prensa-imagen"
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663188711/Prensa/spoty_aajdvd.png"
                                alt="12313216545631"
                                fluid
                            />
                            <div className="ms-3 ">
                                <a
                                    className="sin-sub text-white peso-bold"
                                    href="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg"
                                >
                                    DALE LA VUELTA RADIO - EPISODIO PODCAST -
                                    ENTREVISTA GUILLERMO SOJO BOLLINI DKZ
                                </a>
                            </div>
                        </div>

                        <div className="d-flex mt-4">
                            <Image
                                className="prensa-imagen"
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663183149/entrevista_ndqwjp.jpg"
                                alt="12313216545631"
                                fluid
                            />
                            <div className="ms-3">
                                <a
                                    className="sin-sub text-white peso-bold"
                                    href="https://www.youtube.com/watch?v=xyo_YNi2haQ"
                                >
                                    PROGRAMA 27 - 8° TEMPORADA - GUILLERMO SOJO
                                    BOLLINI - DKZ ESTUDIO
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-lg-block">
                <div className="container">
                    <div className=" text-white">
                        <div className=""></div>
                        <div className="text-white">
                            <div className="d-flex">
                                <Image
                                    className="prensa-imagen"
                                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663188711/Prensa/spoty_aajdvd.png"
                                    fluid
                                />
                                <div className="ms-3 sin-sub">
                                    <a
                                        className="sin-sub text-white peso-bold"
                                        href="https://open.spotify.com/episode/4CCV1bzWfonYyQ73RA71RV?si=eAXTlkuRQziQxoPqSjyaiA&utm_source=native-share-menu&nd=1"
                                    >
                                        {" "}
                                        DALE LA VUELTA RADIO - EPISODIO PODCAST
                                        - ENTREVISTA GUILLERMO SOJO BOLLINI DKZ
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex mt-4">
                                <Image
                                    className="prensa-imagen"
                                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663183149/entrevista_ndqwjp.jpg"
                                    alt="12313216545631"
                                    fluid
                                />
                                <div className="ms-3 ">
                                    <a
                                        className="sin-sub text-white peso-bold"
                                        href="https://www.youtube.com/watch?v=xyo_YNi2haQ"
                                    >
                                        PROGRAMA 27 - 8° TEMPORADA - GUILLERMO
                                        SOJO BOLLINI - DKZ ESTUDIO
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
