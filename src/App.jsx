import Game from './Game';
import Menu from './Menu';
import { useState } from 'react';

function App() {

const [phase, setPhase] = useState(0);
const handleClick = () =>{
  setPhase(1);
}
 
  return (
  <main className = "wrapper">
  {phase === 0 && <Menu 
    phase = {phase}
    setPhase = {setPhase}
  />}
  {phase === 1 && <Game 
    phase = {phase}
    setPhase = {setPhase}
  /> 
  }
  </main>
  )
}

export default App
