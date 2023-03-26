import React from 'react'
import FrontOfCard from './FrontOfCard'
import SongTitle from './SongTitle'

const SongList = ({ title, selectedItem, setSelectedItem, isFlipped }) => {
  
  const MAX_SONGS = 10;
  
  const handleDown = () =>{
    title.length - 1 > selectedItem ? setSelectedItem(selectedItem + 1): setSelectedItem(selectedItem);
  }
  const handleUp = () =>{
    0 < selectedItem ? setSelectedItem(selectedItem - 1): setSelectedItem(selectedItem);
  }

  const minList = (length, sel, MAX) =>{
    return length <= MAX ? 0 : Math.min(sel, length - MAX)
  }

  const highlight = (sel, length, max)=>{
    return sel > length - max ? Math.min(sel, sel - length + max) : 0; 
  }
  
  return (
    <div className="flip-card flip-card-text">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : "notflipped"}`}>
        <FrontOfCard
          frontTitle = "LALALALA"
        /> 
        <div className="listOfAllSongs flip-card-back">
        <button className = "btn_navigation" onClick = {handleUp}></button>
          {title.slice(minList(title.length, selectedItem, MAX_SONGS), selectedItem + 10).map((item, index) => (
            <SongTitle
              key={item.id}
              index={index}
              songTitle={item.title}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              length = {title.length}
              highlight = {highlight(selectedItem, title.length, MAX_SONGS)}
            />
          ))
          }
          <button className="btn_navigation" onClick = {handleDown}></button>
        </div>
      </div>
    </div>
  )
}

export default SongList