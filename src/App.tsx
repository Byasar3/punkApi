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
    // apply filters whenever filter criteria or beer data changes
    setFilteredBeers(applyFilters(beers));
  }, [beers, filterAbv, filterClassicRange, filterHighAcidity]);

  // note: [beers, filterAbv, filterClassicRange, filterHighAcidity] are the dependencies/options of the useEffect hook.

  useEffect(() => {
    // run the code we want to run when the page first loads
    getBeers();
  }, []);

  const applyFilters = (beers: Beer[]): Beer[] => {
    return beers.filter((beer) => {
      // include beers with abv > 6 if filterAbv is true
      if (filterAbv && beer.abv >= 6) {
        return true;
      }

      // include beers brewed before 2010 if filterClassicRange is true
      if (filterClassicRange) {
        const yearBrewed = parseInt(beer.first_brewed.split("/")[1]);
        if (yearBrewed <= 2010) {
          return true;
        }
      }

      if (filterHighAcidity && beer.ph <= 4) {
        return true;
      }

      // include all other beers
      return false;
    });
  };

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
