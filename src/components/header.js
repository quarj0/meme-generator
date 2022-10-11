import React from 'react'
import '../index.css'
import troll from './assets/troll-face.png'
const header = () => {
  return (
    <div className='header'>
      <img src={ troll} alt="troll-face" className='img' />
        <h1 className='header-text'>Meme Generator</h1>
        <h4 className='project-text'>React Course - Project 3</h4>
    </div>
  )
}

export default header