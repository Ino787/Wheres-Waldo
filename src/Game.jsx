import './Game.css'
import React, { useState, useEffect } from 'react';


const Game = (props) =>  {

  return (
    <>
       <img src={props.Map} alt="map" className="Responsive" />
    </>
  )
}

export default Game
