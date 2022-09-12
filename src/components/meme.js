import React from 'react'
import Memes from './memesData'
const meme = () => {
    function handler(){
      const memesData = Memes.data.memes
      let randomNumber = Math.floor(Math.random() * memesData.length);
      console.log(randomNumber)
    }
  return (
    <main>
        <div className="form">
        <input className='form-input' 
        type="text" />
        <input className='form-input' 
        type="text" />
        <button onClick={handler} className='form-btn' 
        type="submit">Get new meme image </button>
        </div>
    </main>
  )
}

export default meme