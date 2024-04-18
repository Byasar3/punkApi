import { useState } from "react"
import "./App.scss"
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar"
import beers from "./data/beer"
import Beer from "./types/Beer"

const App = () => {
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>(beers);
   console.log(filteredBeers);
   
  return (

    <div className="app">
     <NavBar beers={beers} setFilteredBeers={setFilteredBeers}/>
     <Main filteredBeers={filteredBeers}/>
    </div>
  )
}

export default App