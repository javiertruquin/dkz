import FooterEscritorio from '../FooterEscritorio'
import NavEscritorio from '../NavEscritorio'
import SitioConstruEscritorio from '../SitioConstruEscritorio'


export default function MarketingContenidosEscritorio() {
  return (
    <div className="d-flex flex-column color-azul-oscuro-fondo" style={{minHeight: '100vh'}} >
      <NavEscritorio /> 
      <SitioConstruEscritorio />
      <FooterEscritorio />
    </div>
  )
}
