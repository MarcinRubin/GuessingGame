import { useState, useEffect } from 'react'
import TitleCard from './TitleCard'
import TextCard from './TextCard'
import TeamFightSettings from './TeamFightSettings'
import TeamFightPlayerConfirm from './TeamFightPlayerConfirm'
import TeamFightGame from './TeamFightGame'

const TeamFight = ({phase, setPhase, texts, title}) => {
    const [teamFightPhase, setTeamFightPhase] = useState(0);
    const[settings, setSettings] = useState(
      {
        chanceCounter: 3,
        remainingTime: 60,
        roundsCounter: 5,
        teamFightPhase: 0,
        colorScheme: "neutral"
      }
    );
    const [animation, setAnimation] = useState(
      {
        isFlipped: false,
        startShifted: false
      }
    );

    const [punctation, setPunctation] = useState([0, 0])

    const handleReset = () => setPhase(0);
  
    return (
    <div className="game_container2">
    
     {teamFightPhase === 0 && 
      <TeamFightSettings
      settings = {settings}
      setSettings = {setSettings}
      animation = {animation}
      setAnimation = {setAnimation}
      teamFightPhase = {teamFightPhase}
      setTeamFightPhase = {setTeamFightPhase}
      handleReset = {handleReset}
      />}

      {teamFightPhase === 1 &&
        <TeamFightPlayerConfirm
        settings = {settings}
        setSettings = {setSettings}
        animation = {animation}
        setAnimation = {setAnimation}
        teamFightPhase = {teamFightPhase}
        setTeamFightPhase = {setTeamFightPhase}
        handleReset = {handleReset}
        punctation = {punctation}
      />}

      {teamFightPhase === 2 &&
        <TeamFightGame
        texts = {texts}
        title = {title}
        animation = {animation}
        setAnimation = {setAnimation}
        settings = {settings}
        setTeamFightPhase = {setTeamFightPhase}
        handleReset = {handleReset}
        punctation = {punctation}
        setPunctation = {setPunctation}
      />}
    </div>
  )
  
}

export default TeamFight