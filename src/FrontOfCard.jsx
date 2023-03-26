import React from 'react'

const FrontOfCard = ({frontTitle}) => {
  return (
    <div className='flip-card-front'>
      <p className="songTitle">{frontTitle}</p>
    </div>
  )
}

export default FrontOfCard