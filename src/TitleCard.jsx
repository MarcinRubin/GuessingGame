import React from 'react'
import BackTitleCard from './BackOfCard'
import FrontTitleCard from './FrontOfCard'
import { useState } from 'react'

const TitleCard = ({songText, isFlipped, cardTitle}) => {

  return (
    <div className = "flip-card flip-card-title">
      <div className = {`flip-card-inner ${isFlipped ? "flipped": "notflipped"}`}>
        <FrontTitleCard
          frontTitle = {cardTitle}
        />   
        <BackTitleCard
          songText = {songText}
        />
      </div>
    </div>
  )
}

export default TitleCard