import './styles.scss'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Solicitalo = () => {
  return (
    <button className="solicitalo_area">
      <p>Solicítalo ahora</p>
      <FaWhatsapp color="white" size={20} />
    </button>
  )
}

export default Solicitalo
