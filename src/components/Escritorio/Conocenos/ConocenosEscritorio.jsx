import './conocenos.css'
import BannerConocenos from './BannerConocenos'
import IconosEscritorio from '../IconosEscritorio'
import FooterEscritorio from '../FooterEscritorio'
import NavEscritorio from '../NavEscritorio'


export default function ConocenosEscritorio() {
  return (
    <div>
      <NavEscritorio />
      <BannerConocenos /> 
      <IconosEscritorio />
      <hr className="bg-white container" />
      <FooterEscritorio /> 
    </div>
  )
}
