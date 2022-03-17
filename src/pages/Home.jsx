import React from "react";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import Cartas from "../components/Cartas";
import Footer from "../components/Footer";
import Frase from "../components/Frase";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";



export default function Home() {

    return (
        <div>
            <NavbarReact />
            <Banner />
            <Banner2 />
            <Cartas />
            <Banner3 />
            <Frase />
            <Iconos />
            <Footer />
        </div>
    );
}