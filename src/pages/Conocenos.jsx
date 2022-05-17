import React from 'react'
import Contacto from '../components/AudioVisuales/Contacto'
import NavbarReact from '../components/NavbarReact'
import Banner from '../components/Nosotros/Banner'
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";

export default function Conocenos() {
  return (
      <div className="color-azul-oscuro-fondo">
          <NavbarReact /> 
          <Banner />
          <Contacto />
          <Iconos />
          <hr className="bg-white"/>
          <Footer />
    </div>
  )
}
