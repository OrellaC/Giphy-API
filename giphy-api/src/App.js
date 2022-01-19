import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [data, setData] = useState([]);


  const handleClick = () => {
    e.preventDefault()

    axios.get('https://api.giphy.com/v1/gifs/random?api_key=bhjTu6l5hxEEJkzwqsfarzGbMA6SCFBG&tag=&rating=g')
      .then(res => setData(res.data.data.image.original.url))
      .catch(err => console.log(err))
  }


  //setData(res.data.data.image.original.mp4))

  return (

    <div className="App">
      <header className="App-header">
        <h1>Hey</h1>

        {/* On Button click make an API call and retrieve/render a single random GIF */}
        <button onClick={handleClick}>Click for Random Gif</button>
      <img src={data} alt="" />

      </header>
    </div>
  );
}

export default App;
