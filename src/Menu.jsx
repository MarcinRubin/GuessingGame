import React from 'react'

const Menu = ({phase, setPhase}) => {

  return (
    <div className = "menu_container">
        <button className = "btn_start" onClick = {() => setPhase(1)}>TEAM FIGHT</button>
        <button className = "btn_start" onClick = {() => setPhase(2)}>SONG LIST</button>
    </div>
  )
}

export default Menu