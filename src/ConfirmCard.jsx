import { useEffect } from "react"

const ConfirmCard = ({animation, settings, teamInfo}) => {
 
  return (
    <div className = "flip-card flip-card-text">
    <div className = {`flip-card-inner ${animation.isFlipped ? "flipped": "notflipped"}`}>
    <div className={`flip-card-front base ${settings.colorScheme}`}>
      <p className="songTitle"></p>
    </div>  
    <div className={`flip-card-back  base ${settings.colorScheme}`}>
      <div className="team-fight-settings-wrapper">
      <p>{teamInfo}</p>
    </div>
    </div>
    </div>
  </div>
  )
}

export default ConfirmCard