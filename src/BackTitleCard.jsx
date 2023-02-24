import React from 'react'

const BackTitleCard = ({songText}) => {
  return (
    <div className='flip-card-back'>
      <p className="songText">{songText}</p>
    </div>
  )
}

export default BackTitleCard