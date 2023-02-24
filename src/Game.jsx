import texts from './resources/texts.json'
import titles from './resources/titles.json'
import { useState, useEffect } from 'react'
import TitleCard from './TitleCard'
import TextCard from './TextCard'

const Game = ({phase, setPhase}) => {

    const FLIP_DURATION = 1000;
    const [songText, setSongText] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);
    const [chanceCounter, setChanceCounter] = useState(3);
    const [remainingTime, setRemainingTime] = useState(60);
    const [pause, setPause] = useState(false);
    
    //FLIP AND DECREASE CHANCE COUNTER
    const handleClick = (e)=>{
        setIsFlipped(!isFlipped);
        setTimeout(()=>{
          setChanceCounter(chanceCounter - 1);
        }, 1000)
    }

    const handleReset = () => setPhase(0);
    const handlePause = () => setPause(!pause);
    
    //FLIP AGAIN AFTER THE TIMEOUT IN THE HADLE CLICK
    useEffect(() =>{
      setIsFlipped(!isFlipped);
    }, [chanceCounter]);

    //AFTER FLIP ASSIGN NEW TITLE
    useEffect(() =>{
        if(!isFlipped) {
          setTimeout(()=>{
          setSongTitle(titles[Math.floor(Math.random() * titles.length)].title)
          setSongText(texts[Math.floor(Math.random() * texts.length)].song)
        }, FLIP_DURATION);
      }    
    }, [isFlipped])

    //TIMER
    useEffect(() => { 
      const interval = setInterval(() => {
          !pause && setRemainingTime(remainingTime - 1)
      }, 1000);
      if(remainingTime === 0) setPhase(0);
      return () => clearInterval(interval);
    }, [remainingTime, pause]);


  return (
    <div className="game">
      <div className = "upper_UI">
        <button className="btn_main" onClick = {handlePause}>PAUSE</button>
        <button className="btn_main" onClick = {handleReset}>X</button>
      </div>
    <TitleCard
      songText = {songTitle}
      isFlipped = {isFlipped}
      cardTitle = "SONG TITLE"
    />
    <TextCard
      songText = {songText}
      isFlipped = {isFlipped}
      cardTitle = "SONG TEXT"
    />
    <div className="bottom_UI">
        <button className = "btn_main" disabled = {!isFlipped || !chanceCounter} onClick = {handleClick}>ANOTHER ({chanceCounter})</button>
        <p>{remainingTime}</p>
        <button className = "btn_main" onClick = {handleReset}>GIVE UP</button>
    </div>
    
    
    </div>
  )
}

export default Game
