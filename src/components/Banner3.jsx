import React from "react";
import { Image } from "react-bootstrap";

export default function Banner3() {
    return (
        <>
            <div className="color-azul-oscuro-fondo text-center">
                <Image
                    className="w-100"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/juntos-dkz_1_cr6g0y.png"
                    fluid
                    alt="DKZ"
                />
            </div>
        </>
    );
}