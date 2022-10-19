import React from 'react'
import { Radio } from './Radio'
import TrabajosPrensa from './TrabajosPrensa'

export default function PrensaContenido() {
  return (
    <div>
          <p className="tamaño-mas-grande peso-bold text-white text-center espaciado texto-sombra">
              Artículos Destacados
            </p>
          <TrabajosPrensa />
          <Radio />
    </div>
  )
}
