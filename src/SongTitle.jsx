const SongTitle = ({index, songTitle, selectedItem, setSelectedItem, highlight}) => {
  
  //poprawic onClick
  return (
    <p className = { index === highlight ? "item_chosen single_item" : "single_item"
    }  >{songTitle}</p>
  )
}

export default SongTitle