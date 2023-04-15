import { useState, useEffect } from "react";

const ProgressBar = ({roundsCounter, actualRound, colorScheme, teamFightPhase}) => {
  const progressArray = new Array(roundsCounter).fill(0);
  const [theme, setTheme] = useState('');
  
const handleHighlight = (i) =>{
  if(teamFightPhase === 1 && i === actualRound - 1) return "blink-" + colorScheme;
  if(i < actualRound) return "actual-rounds-" + colorScheme;
}

  return (
    <div className="progress-bar-wrapper"  style = {{"--len": roundsCounter}} >
      {progressArray.map((item, i) =>(
        <div key = {i} className = {handleHighlight(i)}></div>
      )
      )}
    </div>
  )
}

export default ProgressBar