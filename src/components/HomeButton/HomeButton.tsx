import { Link } from "react-router-dom"
import "./HomeButton.scss"


const HomeButton = () => {
  return (
	<div><Link to="/"><button>Go Home</button></Link></div>
  )
}

export default HomeButton