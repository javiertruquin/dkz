import FooterEscritorio from '../FooterEscritorio'
import IconosEscritorio from '../IconosEscritorio'
import NavEscritorio from '../NavEscritorio'
import SitioConstruEscritorio from '../SitioConstruEscritorio'

export default function ConsultoriaEscritorio() {
  return (
    <div className="color-azul-oscuro-fondo">
    <NavEscritorio /> 
    <div className="container">
    <SitioConstruEscritorio />
      <IconosEscritorio />
      <hr className="bg-white"/>
    <FooterEscritorio />
    </div> 
  </div>
  )
}
