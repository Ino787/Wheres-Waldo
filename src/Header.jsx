import './Header.css'
import Stopwatch from './Stopwatch'; 


const Header = (props) =>  {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
       <div className="find-them"> Find Them </div>
       <Stopwatch isRunning={props.isRunning}/>
       <div className="character-images"> 
       <img src={props.character_images[0]} alt="character-image-1" />
       <img src={props.character_images[1]} alt="character-image-2" />
       <img src={props.character_images[2]} alt="character-image-3" />
         </div>
     </div>
  )
}

export default Header