import { useState, useEffect } from 'react'
import TeamFightSettings from './TeamFightSettings'
import TeamFightPlayerConfirm from './TeamFightPlayerConfirm'
import TeamFightGame from './TeamFightGame'
import EndingScreen from './EndingScreen'

const TeamFight = ({phase, setPhase, texts, title}) => {
    const [teamFightPhase, setTeamFightPhase] = useState(0);
    const [actualRound, setActualRound] = useState(0);
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
      actualRound = {actualRound}
      handleReset = {handleReset}
      />}

      {teamFightPhase === 1 && actualRound < settings.roundsCounter + 1 &&
        <TeamFightPlayerConfirm
        settings = {settings}
        setSettings = {setSettings}
        animation = {animation}
        setAnimation = {setAnimation}
        teamFightPhase = {teamFightPhase}
        setTeamFightPhase = {setTeamFightPhase}
        handleReset = {handleReset}
        actualRound = {actualRound}
        setActualRound = {setActualRound}
        punctation = {punctation}
      />}

      {teamFightPhase === 2 &&
        <TeamFightGame
        texts = {texts}
        title = {title}
        animation = {animation}
        setAnimation = {setAnimation}
        settings = {settings}
        setSettings = {setSettings}
        teamFightPhase = {teamFightPhase}
        setTeamFightPhase = {setTeamFightPhase}
        handleReset = {handleReset}
        actualRound = {actualRound}
        punctation = {punctation}
        setPunctation = {setPunctation}
      />}
      {
        actualRound === settings.roundsCounter + 1 &&
        <EndingScreen
        />
      }
    </div>
  )
  
}

export default TeamFight