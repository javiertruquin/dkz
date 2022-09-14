import React from "react";
import { Image } from "react-bootstrap";

export const Radio = () => {
  return (
    <div>
      <div className=" d-lg-none d-block">
        <div className="row text-white">
          <div className="">
            
          </div>
          <div className="text-white">
            <div className="d-flex">
              <Image
                className="prensa-imagen"
                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg"
                alt="12313216545631"
                fluid
              />
              <div className="ms-3 ">
                <a className="sin-sub text-white" href="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg">
                  {" "}
                  Dale la vuelta Radio - Episodio Podcast - Entrevista Guillermo Sojo Bollini DKZ
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
                <a className="sin-sub text-white" href="https://www.youtube.com/watch?v=xyo_YNi2haQ">
                  {" "}
                  Programa 27 - 8° Temporada - Guillermo Sojo Bollini - DKZ
                  Estudio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <div className="container">
          <div className="row text-white">
            <div className="">
            
            </div>
            <div className="text-white">
              <div className="d-flex">
                <Image
                  className="prensa-imagen"
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1663184171/306549749_857291485261505_7534753838600488974_n_-_copia_vbrp7n.jpg"
                  fluid
                />
                <div className="ms-3 sin-sub">
                  <a className="sin-sub text-white" href="https://open.spotify.com/episode/4CCV1bzWfonYyQ73RA71RV?si=eAXTlkuRQziQxoPqSjyaiA&utm_source=native-share-menu&nd=1">
                    {" "}
                    Dale la vuelta Radio - Episodio de podcast- Entrevista
                    Guillermo Sojo Bollini DKZ
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
                  <a className="sin-sub text-white" href="https://www.youtube.com/watch?v=xyo_YNi2haQ">
                    {" "}
                    Programa 27 - 8° Temporada - Guillermo Sojo Bollini - DKZ
                    Estudio
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
