import React from 'react'

const BackOfCard = ({songText}) => {
  return (
    <div className='flip-card-back'>
      <p className="songText" >{songText}</p>
    </div>
  )
}

export default BackOfCard