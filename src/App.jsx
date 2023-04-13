import initialTexts from './resources/texts.json'
import initialTitles from './resources/titles.json'
import Game from './Game';
import Menu from './Menu';
import SongEdit from './SongEdit';
import TeamFight from './TeamFight';
import { useState } from 'react';

function App() {

const [phase, setPhase] = useState(0);

const [texts, setTexts] = useState(initialTexts);
const [title, setTitle] = useState(initialTitles);
 
  return (
  <main className = "app_wrapper">
  {phase === 0 && <Menu 
    phase = {phase}
    setPhase = {setPhase}
  />}

{phase === 1 && <TeamFight 
    phase = {phase}
    setPhase = {setPhase}
    texts = {texts}
    title = {title}
  /> 
}
  {phase === 2 && <SongEdit
    phase = {phase}
    setPhase = {setPhase}
    title = {title}
    setTitle = {setTitle}
  />}
  </main>
  )
}

export default App
