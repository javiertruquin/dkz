import './home.css'
import CartasEscritorio from './CartasEscritorio'
import ImagenFrase from './ImagenFrase'
import TrabajosEscritorio from './TrabajosEscritorio'
import IconosEscritorio from '../IconosEscritorio'
import FooterEscritorio from '../FooterEscritorio'
import NavEscritorio from '../NavEscritorio'
import BannerEscritorio from './BannerEscritorio'


export default function HomeContenidoEscritorio() {
  return (
    <div className="color-azul-oscuro-fondo">
      <NavEscritorio />
      <BannerEscritorio />
      <CartasEscritorio />
      <TrabajosEscritorio /> 
      <ImagenFrase />
      <IconosEscritorio />
      <hr className="container bg-white" />
      <FooterEscritorio />
    </div>
  )
}
