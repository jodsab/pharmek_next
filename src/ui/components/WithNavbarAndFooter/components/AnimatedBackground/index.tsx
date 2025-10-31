'use client'

import './animated-background.scss'

import React, { memo } from 'react'

/**
 * AnimatedBackground (optimizado)
 * - 0 dependencias JS externas (sin framer).
 * - DOM súper reducido: 2 nodos + pseudoelementos (::before/::after).
 * - "Partículas" con box-shadow en un solo pseudo-elemento (baratísimo).
 * - Animaciones sólo con transform/background-position (GPU-friendly).
 * - Visibilidad un poco más marcada pero ligera: capas de radial-gradients.
 * - Respeta prefers-reduced-motion y recorta en móviles.
 */

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated_background_wrapper" aria-hidden>
      {/* Capa de formas (radial-gradients) */}
      <div className="bg_shapes" />
      {/* Capa de partículas (single element + box-shadow) */}
      <div className="bg_particles" />
    </div>
  )
}

export default memo(AnimatedBackground)
