import './audiovisual.css'
import AVContenido from './AVContenido'
import AVContenido2 from './AVContenido2'
import BannerAVE from './BannerAVE'
import BotonContactoAV from './BotonContactoAV'
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
      <BotonContactoAV />
      <IconosAV />
      <hr className="bg-white container" />
     <FooterAV />
    </div>
  )
}
