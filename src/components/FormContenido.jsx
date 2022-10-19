import React from 'react'
import FormContactanos from './FormContactanos'
import FormularioContactoEscritorio from './FormularioContactoEscritorio'

export default function FormContenido() {
  return (
      <div>
          <div className='d-none d-sm-block'> <FormularioContactoEscritorio /> </div>
          <div className='d-sm-none d-block'> <FormContactanos /> </div>
    </div>
  )
}
