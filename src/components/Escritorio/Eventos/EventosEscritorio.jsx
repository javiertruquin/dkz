import FooterEscritorio from '../FooterEscritorio'
import IconosEscritorio from '../IconosEscritorio'
import NavEscritorio from '../NavEscritorio'
import SitioConstruEscritorio from '../SitioConstruEscritorio'

export default function EventosEscritorio() {
  return (
    <div>
       <div className="color-azul-oscuro-fondo">
      <NavEscritorio /> 
      <div className="container">
      <SitioConstruEscritorio />
        <IconosEscritorio />
        <hr className="bg-white"/>
      <FooterEscritorio />
      </div> 
    </div>
    </div>
  )
}
