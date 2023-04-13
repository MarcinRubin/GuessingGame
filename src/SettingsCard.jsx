const SettingsCard = ({isFlipped, settings, setSettings}) => {
  
  const incrementTimer = () => {
    if(settings.remainingTime < 120)
      setSettings({...settings, remainingTime: settings.remainingTime + 10});
  }
  const decrementTimer = () =>{
    if(settings.remainingTime > 10)
      setSettings({...settings, remainingTime: settings.remainingTime - 10});
  }
  const incrementChances = () =>{
    if(settings.chanceCounter < 10)
      setSettings({...settings, chanceCounter: settings.chanceCounter + 1});
  }
  const decrementChances = () =>{
    if(settings.chanceCounter > 0)
      setSettings({...settings, chanceCounter: settings.chanceCounter - 1});
  }
  const incrementRounds = () =>{
    if(settings.roundsCounter < 20)
      setSettings({...settings, roundsCounter: settings.roundsCounter + 1});
  }
  const decrementRounds = () =>{
    if(settings.roundsCounter > 1)
      setSettings({...settings, roundsCounter: settings.roundsCounter - 1});
  }

  return (
    <div className = "flip-card flip-card-text">
    <div className = {`flip-card-inner ${isFlipped ? "flipped": "notflipped"}`}>
    <div className={`flip-card-front base`}>
      <p className="songTitle"></p>
    </div>  
    <div className={`flip-card-back base`}>
      <div className="team-fight-settings-wrapper">
      <div className="team-fight-settings">
        <div className="team-fight-settings-label">
          <p>TIME</p>
        </div>
        <div className="team-fight-settings-controls">
          <button className = "leftTriangle" onClick={decrementTimer}></button>
          <p>{settings.remainingTime}</p>
          <button className = "rightTriangle" onClick={incrementTimer}></button>
        </div>
      </div>
      <div className="team-fight-settings">
        <div className="team-fight-settings-label">
          <p>ROUNDS</p>
        </div>
        <div className="team-fight-settings-controls">
          <button className = "leftTriangle" onClick={decrementRounds}></button>
          <p>{settings.roundsCounter}</p>
          <button className = "rightTriangle" onClick={incrementRounds}></button>
        </div>
      </div>
      <div className="team-fight-settings">
        <div className="team-fight-settings-label">
          <p>REPEATS</p>
        </div>
        <div className="team-fight-settings-controls">
          <button className = "leftTriangle" onClick={decrementChances}></button>
          <p>{settings.chanceCounter}</p>
          <button className = "rightTriangle" onClick={incrementChances}></button>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default SettingsCard