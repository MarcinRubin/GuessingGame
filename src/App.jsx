import initialTexts from './resources/texts.json'
import initialTitles from './resources/titles.json'
import Game from './Game';
import Menu from './Menu';
import SongList from './SongList';
import { useState } from 'react';

function App() {

const [phase, setPhase] = useState(0);

const [texts, setTexts] = useState(initialTexts);
const [title, setTitle] = useState(initialTitles);
 
  return (
  <main className = "wrapper">
  {phase === 0 && <Menu 
    phase = {phase}
    setPhase = {setPhase}
  />}
  {phase === 1 && <Game 
    phase = {phase}
    setPhase = {setPhase}
    texts = {texts}
    title = {title}
  /> 
  }
  {phase === 2 && <SongList
    phase = {phase}
    setPhase = {setPhase}
    title = {title}
    setTitle = {setTitle}
  />}
  </main>
  )
}

export default App
