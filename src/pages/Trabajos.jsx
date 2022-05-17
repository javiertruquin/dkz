import React from "react";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import BannerT from "../components/Trabajos/BannerT";
import NavbarReact from "../components/NavbarReact";

export default function Home() {

    return (
        <div className="color-azul-oscuro-fondo">
            <NavbarReact />
            <BannerT />
            <Iconos />
            <Footer />
        </div>
    );
}