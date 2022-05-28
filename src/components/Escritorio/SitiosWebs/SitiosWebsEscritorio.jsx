import FooterEscritorio from '../FooterEscritorio'
import NavEscritorio from '../NavEscritorio'


export default function SitiosWebsEscritorio() {
  return (
    <div  className="d-flex flex-column color-azul-oscuro-fondo"
    style={{ minHeight: "100vh" }}>
    <NavEscritorio /> 
    <FooterEscritorio />
  </div>
  )
}
