'use client'

import './styles.scss'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'

interface Pet {
  id: string
  name: string
  breed: string
  image?: string | StaticImageData
  age?: number
}

interface PetCardClientProps {
  pet?: Pet
  isLoading?: boolean
  onFavoriteToggle?: (petId: string) => void
  onKnowMore?: (petId: string) => void
}

const PetCardClient = ({
  pet,
  isLoading = false,
  onFavoriteToggle,
  onKnowMore
}: PetCardClientProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = () => {
    if (pet?.id) {
      setIsFavorite(!isFavorite)
      onFavoriteToggle?.(pet.id)
    }
  }

  const handleKnowMoreClick = () => {
    if (pet?.id) {
      onKnowMore?.(pet.id)
    }
  }

  if (isLoading || !pet) {
    return (
      <div className="pet_card_container">
        <div className="pet_top">
          <div className="pet_img skeleton" />
          <button className="heart" disabled>
            <CiHeart />
          </button>
        </div>
        <div className="pet_bottom">
          <div className="pet_info">
            <p className="name skeleton-text" />
            <p className="raze skeleton-text" />
          </div>
          <button className="conocelo rounded-lg py-1 px-3" disabled>
            <p>Conócelo</p>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pet_card_container">
      <div className="pet_top">
        <Image
          className="pet_img"
          width={200}
          height={200}
          src={pet.image || './assets/pet.png'}
          alt={`${pet.name} - ${pet.breed}`}
        />
        <button
          className={`heart ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? <FaHeart /> : <CiHeart />}
        </button>
      </div>
      <div className="pet_bottom">
        <div className="pet_info">
          <p className="name">{pet.name}</p>
          <p className="raze">{pet.breed}</p>
        </div>
        <button className="conocelo rounded-lg py-1 px-3" onClick={handleKnowMoreClick}>
          <p>Conócelo</p>
        </button>
      </div>
    </div>
  )
}

export default PetCardClient
