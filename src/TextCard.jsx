import React from 'react'
import BackTitleCard from './BackTitleCard'
import FrontTitleCard from './FrontTitleCard'
import { useState } from 'react'


const TextCard = ({songText, isFlipped, cardTitle}) => {
    return (
        <div className = "flip-card flip-card-text">
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

export default TextCard