
const TitleCard = ({songText, isFlipped, cardTitle, colorScheme}) => {

  return (
    <div className = "flip-card flip-card-title">
      <div className = {`flip-card-inner ${isFlipped ? "flipped": "notflipped"}`}>
        <div className={`flip-card-front base ${colorScheme}`}>
          <p className="songTitle">{cardTitle}</p>
        </div>  
        <div className={`flip-card-back base ${colorScheme}`}>
          <p className="songText" >{songText}</p>
        </div>
      </div>
    </div>
  )
}

export default TitleCard