import React from 'react'

const FrontTitleCard = ({frontTitle}) => {
  return (
    <div className='flip-card-front'>
      <p className="songTitle">{frontTitle}</p>
    </div>
  )
}

export default FrontTitleCard