
import { useState } from "react";
import { Image } from "react-bootstrap";

export default function Wsp() {
    const [wspPosition, setWspPosition] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >=450 ) {
            setWspPosition(true);
        } else {
            setWspPosition(false);
        }
        // console.log(window.scrollY); //Para ver en el medidor de scroll
    };

    window.addEventListener("scroll", changeBackground);
    return (
        <div className="d-flex justify-content-center">
            <div className="navbar-bordes">
                <a
                    className=""
                    href="https://wa.link/ca58mx"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className={wspPosition?"icono-wsp fixed-bottom ms-auto mb-5 pb-5 me-4":"icono-wsp fixed-bottom ms-auto me-4"}
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653504540/iconos/Group_41_bjbdxc.svg"
                        alt="wsp"
                        fluid
                    />
                </a>
            </div>
        </div>
    );
}
