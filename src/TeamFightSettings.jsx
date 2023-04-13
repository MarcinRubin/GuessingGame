import TitleCard from './TitleCard'
import SettingsCard from './SettingsCard'
import ProgressBar from './ProgressBar'
import { useEffect } from 'react'

const TeamFightSettings = ({settings, setSettings, animation, setAnimation, teamFightPhase, setTeamFightPhase, handleReset}) => {

  useEffect(() =>{
    setTimeout(()=>{
      setAnimation({isFlipped: !animation.isFlipped, startShifted: !animation.startShifted});
    }, 50);
  }, []);

  const handleStart = () =>{
    setAnimation({isFlipped: !animation.isFlipped, startShifted: !animation.startShifted});
    setTimeout(() =>{
      setTeamFightPhase(teamFightPhase + 1);
    }, 800)
  }
  
  return (
    <>
    <div className = "game_upper_UI2">
    <button className = {`btn_main_2 base ${settings.colorScheme}`}>||</button>
    <div className="icon_container">
        <img src="src/resources/player-icon.svg" alt="player"></img>
        <div className="timer">
          <p className="timerDisplay">{settings.remainingTime}</p>
        </div>
        <img src="src/resources/player-icon-2.svg" alt="player2"></img>
    </div>
    <button className={`btn_main_2 base ${settings.colorScheme}`} onClick = {handleReset}>X</button>
    </div>
<TitleCard
  songText = "TEAM FIGHT"
  isFlipped = {animation.isFlipped}
  colorScheme = {settings.colorScheme}
/>
<ProgressBar
roundsCounter = {settings.roundsCounter}
/>
<SettingsCard
  isFlipped = {animation.isFlipped}
  settings = {settings}
  setSettings = {setSettings}
/>
<div className="game_bottom_UI">
<button className={animation.startShifted? `btn_start_2 btn_start_2_shifted base`: `btn_start_2 base`} onClick={handleStart}>START!</button>
</div>
</>
  )
}

export default TeamFightSettings