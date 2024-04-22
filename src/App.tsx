import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
// import beers from "./data/beer"
import Beer from "./types/Beer";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);

  // search stuff
  const [searchNameTerm, setSearchNameTerm] = useState<string>("");
  const [filterAbv, setFilterAbv] = useState<boolean>(false);
  const [filterClassicRange, setFilterClassicRange] = useState<boolean>(false);
  const [filterHighAcidity, setFilterHighAcidity] = useState<boolean>(false);

  const getBeers = async () => {
    const url = "http://localhost:3333/v2/beers";
    const response = await fetch(url);
    const data: Beer[] = await response.json();
    console.log(data);
    setBeers(data);
  };

  useEffect(() => {
    // run the code we want to run when the page first loads
    getBeers();
  }, []);

  return (
    <div className="app">
      <NavBar
        beers={beers}
        setFilteredBeers={setFilteredBeers}
        searchNameTerm={searchNameTerm}
        setSearchNameTerm={setSearchNameTerm}
        setFilterAbv={setFilterAbv}
        setFilterClassicRange={setFilterClassicRange}
        setFilterHighAcidity={setFilterHighAcidity}
      />
      <Main filteredBeers={filteredBeers.length ? filteredBeers : beers} />
    </div>
  );
};

export default App;
