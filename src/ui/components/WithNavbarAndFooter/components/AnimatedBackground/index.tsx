'use client'

import './animated-background.scss'

const AnimatedBackground = () => {
  return (
    <div className="animated_background_wrapper">
      {/* Formas de fondo animadas */}
      <div className="background_shapes">
        <div className="shape shape_1"></div>
        <div className="shape shape_2"></div>
        <div className="shape shape_3"></div>
        <div className="shape shape_4"></div>
      </div>

      {/* Partículas flotantes - REDUCIDAS a 5 */}
      <div className="floating_particles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`particle particle_${i + 1}`}></div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground
