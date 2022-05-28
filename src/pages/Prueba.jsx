import React from 'react'
import FooterEscritorio from '../components/Escritorio/FooterEscritorio'
import NavEscritorio from '../components/Escritorio/NavEscritorio'

export default function Prueba() {
  return (
      <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
          <NavEscritorio /> 
          <FooterEscritorio />
    </div>
  )
}
