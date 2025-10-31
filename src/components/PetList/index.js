import 'aos/dist/aos.css'
import './styles.scss'

import Aos from 'aos'
import React, { useEffect } from 'react'

import PetCard from '@/app/components/PetCard'

const PetList = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section className="section_hogar content">
      <ul className="pet_list" data-aos="fade-up">
        {Array(3)
          .fill({})
          .map((e, index) => {
            return (
              <li key="index">
                <PetCard />
              </li>
            )
          })}
      </ul>
    </section>
  )
}

export default PetList
