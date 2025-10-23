import './styles.scss'

import React from 'react'
import { CiHeart } from 'react-icons/ci'

const PetCard = () => {
  return (
    <div className="pet_card_container">
      <div className="pet_top">
        <button className="heart">
          <CiHeart />
        </button>
      </div>
      <div className="pet_bottom">
        <div className="pet_info">
          <p className="name">Lucas</p>
          <p className="raze">Yorkshire Terrier</p>
        </div>
        <button className="conocelo rounded-lg py-1 px-3">
          <p>Conócelo</p>
        </button>
      </div>
    </div>
  )
}

export default PetCard
