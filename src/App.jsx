import './App.css'
import React, { useState, useEffect } from 'react';
import Header from './Header.jsx'
import Game from './Game.jsx';
import character_image_1 from './Bowser.png';
import character_image_2 from './Metroid.png';
import character_image_3 from './Tom.png';
import WaldoMap3 from './WaldoMap3.png'
import Footer from './Footer.jsx'



const App = () =>  {
  const [isRunning, setIsRunning] = useState(true);


  return (
    <>
     <Header isRunning={isRunning} character_images={[character_image_1, character_image_2, character_image_3]}/>
     <Game Map={WaldoMap3} />
     <Footer />
    </>
  )
}

export default App
