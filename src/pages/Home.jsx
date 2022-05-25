import React from "react";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import Cartas from "../components/Cartas";
import HomeContenidoEscritorio from "../components/Escritorio/HomeEscritorio/HomeContenidoEscritorio";
import Footer from "../components/Footer";
import Frase from "../components/Frase";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";

export default function Home() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block  ">
                <NavbarReact />
                <Banner />
                <Banner2 />
                <Cartas />
                <Banner3 />
                <Frase />
                <Iconos />
                <hr className="bg-white" />
                <Footer />
            </div>
            <div className="d-none d-sm-block">
                <HomeContenidoEscritorio />
            </div>
        </div>
    );
}
