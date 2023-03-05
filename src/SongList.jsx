import SongTitle from "./SongTitle"
import { useState } from "react"

const SongList = ({phase, setPhase, title, setTitle}) => {
  
  const [selectedItem, setSelectedItem] = useState(1);
  const [userList, setUserList] = useState('');
  
  const handleDelete = () =>{
    const newList = title.filter(item => item.id !== selectedItem);
    setSelectedItem(newList[0].id);
    setTitle(newList);
  }

  const handleLoadFile = async (e) =>{
    e.preventDefault();
    try{
    const myFile = await e.target.files[0].text();
    const obj = JSON.parse(myFile);
    setUserList(obj);
    }
    catch{
        console.log("Problem z plikiem lub zly format pliku");
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTitle(userList);
  }

  return (
    <div>
    <div className="listOfAllSongs">
    {title.map(item =>(
        <SongTitle
            key = {item.id}
            id = {item.id}
            songTitle = {item.title}
            selectedItem = {selectedItem}
            setSelectedItem = {setSelectedItem}
        />
    ))
    }
    </div>
    <button onClick = {handleDelete}>Delete</button>
    <button onClick = {() => setPhase(0)}>Return</button>
    <form onSubmit = {handleSubmit}>
      <input type="file" required accept = ".txt,.json" onChange = {handleLoadFile}></input>
      <button type = "submit">lala</button>
    </form>
    </div>
  )
}

export default SongList