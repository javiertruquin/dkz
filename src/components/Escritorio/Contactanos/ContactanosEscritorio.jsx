import './contactanos.css'
import FooterEscritorio from '../FooterEscritorio'
import IconosEscritorio from '../IconosEscritorio'
import NavEscritorio from '../NavEscritorio'
import FormularioContactoEscritorio from './FormularioContactoEscritorio'


export default function ContactanosEscritorio() {
  return (
    <div>
      <NavEscritorio />
      <div >
      <FormularioContactoEscritorio />
      </div>
      <IconosEscritorio /> 
      <hr className="bg-white container" />
      <FooterEscritorio />
    </div>
  )
}
