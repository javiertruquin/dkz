import './contactanos.css'
import FooterEscritorio from '../FooterEscritorio'
import NavEscritorio from '../NavEscritorio'
import FormularioContactoEscritorio from './FormularioContactoEscritorio'


export default function ContactanosEscritorio() {
  return (
    <div className="d-flex flex-column color-azul-oscuro-fondo" style={{minHeight: '100vh'}} >
      <NavEscritorio />
      <FormularioContactoEscritorio />
      <FooterEscritorio />
    </div>
  )
}
