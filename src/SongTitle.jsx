const SongTitle = ({id, songTitle, handleClick, selectedItem, setSelectedItem}) => {

  return (
    <p onClick = {()=>{ setSelectedItem(id); }} className = {id === selectedItem ? "item_chosen" : ""}  >{songTitle}</p>
  )
}

export default SongTitle