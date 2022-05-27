import React from "react";
import { Image } from "react-bootstrap";
import { Fade } from "react-reveal";

export default function Banner3() {
    return (
        <>
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
        </>
    );
}
