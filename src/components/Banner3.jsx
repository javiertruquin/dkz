import React from "react";
import { Image } from "react-bootstrap";
import { Fade } from "react-reveal";

export default function Banner3() {
    return (
        <>
            <Fade>
                <div className="color-azul-oscuro-fondo text-center mt-3 mb-4">
                    <Image
                        className="w-100 imagen-dkz"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647486704/Home/Mask_Group_1_e0xlo4.png"
                        fluid
                        alt="DKZ-banner"
                    />
                    <Image
                        className="w-100 imagen-dkz-fondo1"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647486700/Home/Vector_4_hktvnm.png"
                        fluid
                        alt="DKZ-banner"
                    />
                    <Image
                        className="w-100 imagen-dkz-fondo2"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647486525/Home/Vector_2_tso0nu.png"
                        fluid
                        alt="DKZ-banner"
                    />
                </div>
            </Fade>
        </>
    );
}
