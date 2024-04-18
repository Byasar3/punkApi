import "./App.scss"
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar"
import beers from "./data/beer"

const App = () => {


  return (

    <div className="app">
     <NavBar/>
     <Main beers={beers}/>
    </div>
  )
}

export default App