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
      const randomNumber = Math.floor(Math.random() * memesArray.length);
const url = memesArray[randomNumber].url
      setmeme(prevMeme => ({
        ...prevMeme,
        randomImage : url
      }))
    }

    function changehandler(event){
      const{name, value} = event.target
      setmeme(prevMeme => ({
        ...prevMeme,
       [name]: value
      }))
    }

  return (
    <main>
        <div className="form">
        <input 
        type="text"
        placeholder='Top text'
        className='form-input'
         name='topText'
        value={meme.topText} 
        onChange={changehandler} 
        />
        <input 
        placeholder='Bottom text'
        type="text" 
        className='form-input'
         name='bottomText'
        value={meme.bottomText}
        onChange={changehandler}
        />
        <button onClick={getMeme} 
        className='form-btn' 
        >Get new meme image 🖼️</button>
      </div>
      <div className='meme'>
      <h2 className='meme-text-top'>{meme.topText}</h2>
       <h2 className='meme-text-down'>{meme.bottomText}</h2>
      <img src={meme.randomImage}
       className='meme-image' alt='meme' />
       
       </div>
    </main>
  )
}

export default Meme