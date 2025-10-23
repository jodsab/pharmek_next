import 'aos/dist/aos.css'

import Aos from 'aos'
import React, { useEffect } from 'react'

const HocLeft = ({ children }) => {
  useEffect(() => {
    Aos.init()
  }, [])

  return <div data-aos="zoom-out">{children}</div>
}

export default HocLeft
