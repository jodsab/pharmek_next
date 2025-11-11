import React from 'react'

const CardSkeleton = (): React.JSX.Element => {
  return (
    <div className="categorias_card skeleton_card">
      <div className="card_image skeleton"></div>
      <div className="card_overlay">
        <div className="skeleton_text"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
