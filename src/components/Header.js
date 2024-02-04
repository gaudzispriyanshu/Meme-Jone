import React from 'react'
import Image from '../public/Assets/troll-face.png'

const Header = () => {
  return (
      <header className='header'>
          <img src={Image} alt="Troll-Face" className='header--image'/>
          <h2 className='header--title'>Meme Generator</h2>
          <h4 className='header--project'>A simple react project</h4>
      </header>
  )
}

export default Header 