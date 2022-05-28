import React from 'react'
import FooterEscritorio from '../FooterEscritorio'
import NavEscritorio from '../NavEscritorio'
import BannerMB from './BannerMB'
import ClientesMb from './ClientesMb'
import TrabajosMB from './TrabajosMB'


export default function MindBlownEscritorio() {
  return (
    <div
      className="d-flex flex-column color-azul-oscuro-fondo"
      style={{ minHeight: "100vh" }}
    >
      <NavEscritorio />
      <BannerMB />
      <TrabajosMB />
      <ClientesMb />
      <FooterEscritorio />
    </div>
  )
}
