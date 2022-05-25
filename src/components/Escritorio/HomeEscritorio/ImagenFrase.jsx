import React from "react";
import { Image } from "react-bootstrap";

export default function ImagenFrase() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <div >
                  <Image
                      className="px-2"
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653501827/Home/dkzbanner_walgxe.png"
            fluid
            alt="DKZ"
          />
        </div>
        <div className="text-white d-flex justify-content-center mx-auto">
                  <div className="px-5">
                  <div className="efecto-blur-card-escritorio tarjeta">
                    <div>
                        <p className="frase peso-italic text-white text-center tamaño-medio mt-5">
                            “Aquellos que están lo suficientemente <br />
                            locos para creer que pueden cambiar <br />
                            el mundo son quienes lo cambian” <br/>
                            <span className="container d-flex justify-content-end tamaño-medio ">
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
