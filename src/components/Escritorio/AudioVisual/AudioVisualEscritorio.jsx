import './audiovisual.css'
import BannerAVE from './BannerAVE'
import AVContenido from './AVContenido'
import AVContenido2 from './AVContenido2'
import BotonContactanos from "../../BotonContactanos";
import FooterEscritorio from '../FooterEscritorio'
import IconosEscritorio from '../IconosEscritorio'
import NavEscritorio from '../NavEscritorio'



export default function AudioVisualEscritorio() {
  return (
    <div>
      <NavEscritorio />
      <BannerAVE />
      <AVContenido /> 
      <AVContenido2 />
      <BotonContactanos />
      <FooterEscritorio />
    </div>
  )
}
