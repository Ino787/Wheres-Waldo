import './Stopwatch.css'
import React, { useState, useEffect } from 'react';


const Stopwatch = (props) =>  {
    const [Time, setTime] = useState(0);

    useEffect(() => {
        let interval;
        if (props.isRunning) {
          interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
          }, 1000);
        } else {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);
      }, [props.isRunning]);

      const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };
    

  return (
    <div className="stopwatch">
      {formatTime(Time)}
     </div>
  )
}

export default Stopwatch