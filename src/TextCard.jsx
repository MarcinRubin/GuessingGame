import React from 'react'
import BackOfCard from './BackOfCard'
import FrontOfCard from './FrontOfCard'
import { useState } from 'react'

const TextCard = ({songText, isFlipped, cardTitle}) => {
    return (
        <div className = "flip-card flip-card-text">
          <div className = {`flip-card-inner ${isFlipped ? "flipped": "notflipped"}`}>
            <FrontOfCard
              frontTitle = {cardTitle}
            />   
            <BackOfCard
              songText = {songText}
            />
          </div>
        </div>
    )
}

export default TextCard