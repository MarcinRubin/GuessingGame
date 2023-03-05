import React from 'react'

const Menu = ({phase, setPhase}) => {

  return (
    <div className = "menu">
        <button className = "btn_start" onClick = {() => setPhase(1)}>START GAME</button>
        <button className = "btn_start" onClick = {() => setPhase(2)}>SONG LIST</button>
    </div>
  )
}

export default Menu