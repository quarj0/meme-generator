import React from 'react'
import { useState } from 'react'
import memesData from './memesData'
const Meme = () => {
  const [meme, setmeme] = useState({
    topText : "",
    bottomText:"",
    randomImage : "https://api.imgflip.com/get_memes"
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMeme(){
      const memesArray = allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memesData.length);
const url = memesArray[randomNumber].url
      setmeme(prevMeme => ({
        ...prevMeme,
        randomImage : url
      }))
    }
  return (
    <main>
        <div className="form">
        <input className='form-input' 
        type="text" />
        <input className='form-input' 
        type="text" />
        <button onClick={getMeme} className='form-btn' 
        >Get new meme image 🖼️</button>
      </div>
      <img src={meme.randomImage} className='meme-image' alt='meme' />
    </main>
  )
}

export default Meme