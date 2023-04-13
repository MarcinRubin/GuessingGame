import { useEffect, useState } from "react"
import TitleCard from "./TitleCard"
import ConfirmCard from "./ConfirmCard"
import ProgressBar from "./ProgressBar"


const TeamFightPlayerConfirm = ({settings, setSettings, animation, setAnimation, teamFightPhase, setTeamFightPhase, handleReset, punctation}) => {

  useEffect(() =>{
    setTimeout(()=>{
      setAnimation({isFlipped: !animation.isFlipped, startShifted: !animation.startShifted});
      settings.colorScheme === "blue" ?
        setSettings({...settings, colorScheme: "red"})
        : setSettings({...settings, colorScheme: "blue"})
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
        <p>{punctation[0]}</p>
        <div className="timer">
          <p className="timerDisplay">{settings.remainingTime}</p>
        </div>
        <img src="src/resources/player-icon-2.svg" alt="player2"></img>
        <p>{punctation[1]}</p>
    </div>
    <button className={`btn_main_2 base ${settings.colorScheme}`} onClick = {handleReset}>X</button>
    </div>
    <TitleCard
      songText = {settings.colorScheme === "blue" ? "DRUŻYNA NIEBIESKA!" : "DRUŻYNA CZERWONA!"}
      isFlipped = {animation.isFlipped}
      colorScheme = {settings.colorScheme}
    />
    <ProgressBar
      roundsCounter = {settings.roundsCounter}
    />
    <ConfirmCard
      animation = {animation}
      settings = {settings}
      teamInfo = {settings.colorScheme === "blue" ? "DRUŻYNA NIEBIESKA!" : "DRUŻYNA CZERWONA!"}
    />
    <div className="game_bottom_UI">
    <button className={animation.startShifted? `btn_start_2 btn_start_2_shifted base ${settings.colorScheme}`: `btn_start_2 base ${settings.colorScheme}`} onClick = {handleStart}>START!</button>
    </div>  
  </>
)
}

export default TeamFightPlayerConfirm

