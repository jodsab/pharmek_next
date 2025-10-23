import React from 'react'
import SolicitaloClient from './Solicitalo.client'

interface SolicitaloProps {
  // Define tus props aquí
}

const Solicitalo = async (props: SolicitaloProps) => {
  // Fetch de datos del servidor aquí
  // const data = await fetchData()

  return <SolicitaloClient {...props} />
}

export default Solicitalo