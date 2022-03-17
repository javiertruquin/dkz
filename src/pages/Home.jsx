import React from "react";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import NavbarReact from "../components/NavbarReact";
import Cartas from "../components/Cartas";



export default function Home() {

    return (
        <div>
            <NavbarReact />
            <Banner />
            <Banner2 />
            
            <Cartas />
        </div>
    );
}