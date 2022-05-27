import './contactanos.css'
import FooterEscritorio from '../FooterEscritorio'
import IconosEscritorio from '../IconosEscritorio'
import NavEscritorio from '../NavEscritorio'
import FormularioContactoEscritorio from './FormularioContactoEscritorio'


export default function ContactanosEscritorio() {
  return (
    <div>
      <NavEscritorio />
      <FormularioContactoEscritorio />
      <div className="margen-iconos">
      <IconosEscritorio /> 
      </div>
      
      <hr className="bg-white container" />
      <FooterEscritorio />
    </div>
  )
}
