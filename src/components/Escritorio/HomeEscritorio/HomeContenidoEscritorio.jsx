import './home.css'
import CartasEscritorio from './CartasEscritorio'
import ImagenFrase from './ImagenFrase'
import TrabajosEscritorio from './TrabajosEscritorio'
import FooterEscritorio from '../FooterEscritorio'
import NavEscritorio from '../NavEscritorio'
import BannerEscritorio from './BannerEscritorio'
import Banner2Escritorio from './Banner2Escritorio'



export default function HomeContenidoEscritorio() {
  return (
    <div className="d-flex flex-column color-azul-oscuro-fondo" style={{minHeight: '100vh'}} >
      <NavEscritorio />
      <BannerEscritorio />
      <Banner2Escritorio />
      <CartasEscritorio />
      <TrabajosEscritorio /> 
      <ImagenFrase />
      <FooterEscritorio />
    </div>
  )
}
