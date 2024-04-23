import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Beer from "./types/Beer";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);

  // search stuff
  const [searchNameTerm, setSearchNameTerm] = useState<string>("");
  const [filterAbv, setFilterAbv] = useState<boolean>(false);
  const [filterClassicRange, setFilterClassicRange] = useState<boolean>(false);
  const [filterHighAcidity, setFilterHighAcidity] = useState<boolean>(false);

  const getBeers = async (beerNameSearch : string, AbvFilter : boolean, classicRangeFilter : boolean, HighAcidityFilter : boolean) => {
    let url = `http://localhost:3333/v2/beers`;

    // cases where different parameters are entered:


    if (beerNameSearch && !AbvFilter && !classicRangeFilter) {         // name search
      url += `?beer_name=${beerNameSearch}`;
    } else if (beerNameSearch && AbvFilter && !classicRangeFilter){    // name search and ABV filter
      url += `?beer_name=${beerNameSearch}&abv_gt=6`;
    } else if (beerNameSearch && AbvFilter && classicRangeFilter) {    // name search and ABV filter amd classic range filter
      url += `?beer_name=${beerNameSearch}&abv_gt=6&brewed_before=01-2010`;
    } else if (beerNameSearch && !AbvFilter && classicRangeFilter) {   // name search and classic range filter
      url += `?beer_name=${beerNameSearch}&brewed_before=01-2010`;
    } else if (!beerNameSearch && AbvFilter && classicRangeFilter) {   // abv filter and classic range filter
      url += `?abv_gt=6&brewed_before=01-2010`;
    } else if (!beerNameSearch && !AbvFilter && classicRangeFilter) {  // classic range filter 
      url += `?brewed_before=01-2010`;
    } else if(!beerNameSearch && AbvFilter && !classicRangeFilter) {   // abv filter
      url += `?abv_gt=6`
    }

    const response = await fetch(url);
    const data: Beer[] = await response.json();
    if (HighAcidityFilter) {
      const filteredHighAcidityBeers = acidityFilter(data)    
      setBeers(filteredHighAcidityBeers)
    } else {
      setBeers(data);
    }
  };

  useEffect(() => {
    // run the code we want to run when the page first loads
    getBeers(searchNameTerm, filterAbv, filterClassicRange, filterHighAcidity);
  }, [searchNameTerm, filterAbv, filterClassicRange, filterHighAcidity]);

const acidityFilter = (beers: Beer[]): Beer[] => {
  return beers.filter((beer) => beer.ph <= 4);
};

  return (
    <div className="app">
      <NavBar
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
