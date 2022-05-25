import React from 'react'
import NavbarReact from '../../NavbarReact'
import FooterAV from '../AudioVisual/FooterAV'
import BannerConocenos from './BannerConocenos'
import BotonContactanosConocenos from './BotonContactanosConocenos'
import './conocenos.css'
import IconosConocenos from './IconosConocenos'

export default function ConocenosEscritorio() {
  return (
    <div>
      <NavbarReact />
      <BannerConocenos /> 
      <BotonContactanosConocenos />
      <IconosConocenos />
      <hr className="bg-white container" />
      <FooterAV />
    </div>
  )
}
