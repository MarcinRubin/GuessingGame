import SongList from "./SongList";
import TitleCard from "./TitleCard";
import { useEffect, useState } from "react"

const SongEdit = ({ phase, setPhase, title, setTitle }) => {

  const [selectedItem, setSelectedItem] = useState(0);
  const [userList, setUserList] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 500)
  }, [])

  const handleDelete = () => {
    if(title.length === 1) return;
    const newList = title.filter((item, index) => index !== selectedItem);
    selectedItem === title.length - 1 && setSelectedItem(selectedItem - 1);
    setTitle(newList);
    
  }

  const handleLoadFile = async (e) => {
    e.preventDefault();
    try {
      const myFile = await e.target.files[0].text();
      const obj = JSON.parse(myFile);
      setUserList(obj);
    }
    catch {
      console.log("Problem z plikiem lub zly format pliku");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(userList);
    setSelectedItem(0);
    console.log("Loaded");
    console.log(userList[0].id)
  }

  return (

    <div className="game_container2">
      <TitleCard
        songText={title[selectedItem].title}
        isFlipped={isFlipped}
        cardTitle="SONG TITLE"
      />
      <SongList
        title={title}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        isFlipped={isFlipped}
      />
      <div className="game_bottom_UI">
      <button className = "btn_main" onClick={handleDelete}>DELETE</button>
      <button className = "btn_main" onClick={() => setPhase(0)}>RETURN</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" required accept=".txt,.json" onChange={handleLoadFile}></input>
        <button type="submit">LOAD</button>
      </form>
    </div>
  )
}

export default SongEdit