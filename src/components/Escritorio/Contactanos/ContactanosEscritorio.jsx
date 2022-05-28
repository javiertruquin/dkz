import './contactanos.css'
import FooterEscritorio from '../FooterEscritorio'
import IconosEscritorio from '../IconosEscritorio'
import NavEscritorio from '../NavEscritorio'
import FormularioContactoEscritorio from './FormularioContactoEscritorio'


export default function ContactanosEscritorio() {
  return (
    <div className="fixed-contactanos-esc">
      <NavEscritorio />
      <div className="fixed-contact-form">
      <FormularioContactoEscritorio />
      </div>
      <IconosEscritorio />
      <hr className="bg-white container" />
      <div className="container">
      <FooterEscritorio />
      </div>
     
    </div>
  )
}
