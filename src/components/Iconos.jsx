import React from "react";
import { Image } from "react-bootstrap";
import wsp from "../assets/icons/wsp.svg"
import Contacto from "./Contacto";


export default function Iconos() {
    return (
        <div className="color-azul-oscuro-fondo color-violeta">
            <div className="text-center">
                <Image
                    className="iconos mx-2 mt-4 mb-4"
                    src={wsp}
                    fluid
                    alt="DKZ"
                />
                <Image
                    className="iconos mx-2 mt-4 mb-4"
                    src={wsp}
                    fluid
                    alt="DKZ"
                />
                <Image
                    className="iconos mx-2 mt-4 mb-4"
                    src={wsp}
                    fluid
                    alt="DKZ"
                />
                <Image
                    className="iconos mx-2 mt-4 mb-4"
                    src={wsp}
                    fluid
                    alt="DKZ"
                />
            </div>
            <Contacto />
        </div>
    );
}