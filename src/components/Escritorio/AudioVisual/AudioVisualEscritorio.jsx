import './audiovisual.css'
import AVContenido from './AVContenido'
import AVContenido2 from './AVContenido2'
import BannerAVE from './BannerAVE'
import BotonContacto from './BotonContacto'
import FooterAV from './FooterAV'
import IconosAV from './IconosAV'
import NavReactAV from './NavReactAV'



export default function AudioVisualEscritorio() {
  return (
    <div>
      <NavReactAV />
      <BannerAVE />
      <AVContenido /> 
      <AVContenido2 />
      <BotonContacto />
      <IconosAV />
      <hr className="bg-white container" />
     <FooterAV />
    </div>
  )
}
