import { useEffect, useState } from "react"
import TitleCard from "./TitleCard"
import TextCard from "./TextCard"
import ProgressBar from "./ProgressBar"

const TeamFightGame = ({texts, title, animation, setAnimation, settings, setSettings, teamFightPhase, setTeamFightPhase, handleReset, actualRound, punctation, setPunctation}) => {
    
  const [songText, setSongText] = useState('');
  const [songTitle, setSongTitle] = useState('');
  
  const [timer, setTimer] = useState(settings.remainingTime);
  const [pause, setPause] = useState(false);
  const [remainingChance, setRemainingChance] = useState(settings.chanceCounter);

    //TIMER
    useEffect(() => { 
      const interval = setInterval(() => {
          !pause && setTimer(timer - 1);
      }, 1000);
      if(timer === 0){
        setAnimation({startShifted: !animation.startShifted, isFlipped: !animation.isFlipped});
        setTimeout(()=>{
          setTeamFightPhase(1);
        }, 1000)
        return () => clearInterval(interval); 
      }
      return () => clearInterval(interval); 

      
    }, [timer, pause]);

    useEffect(() =>{
      setTimeout(()=>{
        setAnimation({isFlipped: !animation.isFlipped, startShifted: !animation.startShifted});
      }, 50);
    }, [remainingChance]);

    //AFTER FLIP ASSIGN NEW TITLE
    useEffect(() =>{
        if(!animation.isFlipped) {
          setTimeout(()=>{
          setSongTitle(title[Math.floor(Math.random() * title.length)].title)
          setSongText(texts[Math.floor(Math.random() * texts.length)].song);       }, 200);
      }    
    }, [animation])

    //FLIP AND DECREASE CHANCE COUNTER
    const handleNext = (e) =>{
      setAnimation({startShifted: !animation.startShifted, isFlipped: !animation.isFlipped});
      setTimeout(()=>{
          setRemainingChance(remainingChance - 1);
      }, 1000)
    }

    const handleGiveUp = (e) =>{
      setAnimation({startShifted: !animation.startShifted, isFlipped: !animation.isFlipped});
      setTimeout(()=>{
          setTeamFightPhase(1);
      }, 1000)
    }

    const handleYay = (e) =>{
      settings.colorScheme === "blue" ? 
      setPunctation([punctation[0] + 1, punctation[1]])
      : setPunctation([punctation[0], punctation[1]+1]);
    }

    const handlePause = () => setPause(!pause);

    
    return (
        <>
        <div className = "game_upper_UI2">
    <button className = {`btn_main_2 base ${settings.colorScheme}`} onClick = {handlePause}>||</button>
    <div className="icon_container">
    <div className="player-icon">
        <img src="src/resources/player-icon.svg" alt="player"></img>
        <p>{punctation[0]}</p>
      </div>
        <div className="timer">
          <p className="timerDisplay">{timer}</p>
        </div>
        <div className="player-icon">
        <img src="src/resources/player-icon-2.svg" alt="player2"></img>
        <p>{punctation[1]}</p>
        </div>
    </div>
    <button className={`btn_main_2 base ${settings.colorScheme}`} onClick = {handleReset}>X</button>
    </div>
    <TitleCard
      songText = {songTitle}
      isFlipped = {animation.isFlipped}
      colorScheme = {settings.colorScheme}
    />
    <ProgressBar
    roundsCounter = {settings.roundsCounter}
    actualRound = {actualRound}
    colorScheme = {settings.colorScheme}
    teamFightPhase = {teamFightPhase}
    />
    <TextCard
      songText = {songText}
      isFlipped = {animation.isFlipped}
      cardTitle = ""
      colorScheme = {settings.colorScheme}
    />
    <div className="game_bottom_UI">
      <button className = {animation.startShifted? `fixed base ${settings.colorScheme} lefty`: `fixed base ${settings.colorScheme}` } onClick = {handleGiveUp}> GIVE UP </button>
      <button className= {animation.startShifted? `fixed base ${settings.colorScheme} righty` : `fixed base ${settings.colorScheme}`} onClick = {handleNext} disabled = {!animation.isFlipped || !remainingChance} > NEXT ({remainingChance}) </button>
      <button className={animation.startShifted? `btn_start_2 base ${settings.colorScheme} btn_start_2_shifted`: `btn_start_2 base ${settings.colorScheme}`} onClick = {handleYay} >YAY!</button>
    </div>

    </>
      )
      }

export default TeamFightGame
