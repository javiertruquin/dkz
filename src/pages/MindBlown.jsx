import React from "react";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import BannerT from "../components/MindBlown/BannerT";
import Trabajos from "../components/MindBlown/Trabajos";
import Clientes from "../components/MindBlown/Clientes";
import NavbarReact from "../components/NavbarReact";
import BotonContactanos from "../components/BotonContactanos";

export default function MindBlown() {
    return (
        <div className="color-azul-oscuro-fondo">
            <NavbarReact />
            <BannerT />
            <Trabajos />
            <Clientes />
            <div className="pt-5">
                <BotonContactanos />
            </div>
            <Iconos />
            <Footer />
        </div>
    );
}
