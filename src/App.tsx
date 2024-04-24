import { FormEvent, useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Beer from "./types/Beer";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  // search stuff
  const [searchNameTerm, setSearchNameTerm] = useState<string>("");
  const [filterAbv, setFilterAbv] = useState<boolean>(false);
  const [filterClassicRange, setFilterClassicRange] = useState<boolean>(false);
  const [filterHighAcidity, setFilterHighAcidity] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getBeers = async (
    beerNameSearch: string,
    AbvFilter: boolean,
    classicRangeFilter: boolean,

    HighAcidityFilter: boolean,
    pageNumber: number
  ) => {
    let url = `http://localhost:3333/v2/beers?page=${pageNumber}&per_page=40`;

    // cases where different parameters are entered:

    if (beerNameSearch && !AbvFilter && !classicRangeFilter) {
      // name search
      url += `&beer_name=${beerNameSearch}`;
    } else if (beerNameSearch && AbvFilter && !classicRangeFilter) {
      // name search and ABV filter
      url += `&beer_name=${beerNameSearch}&abv_gt=6`;
    } else if (beerNameSearch && AbvFilter && classicRangeFilter) {
      // name search and ABV filter amd classic range filter
      url += `&beer_name=${beerNameSearch}&abv_gt=6&brewed_before=01-2010`;
    } else if (beerNameSearch && !AbvFilter && classicRangeFilter) {
      // name search and classic range filter
      url += `&beer_name=${beerNameSearch}&brewed_before=01-2010`;
    } else if (!beerNameSearch && AbvFilter && classicRangeFilter) {
      // abv filter and classic range filter
      url += `&abv_gt=6&brewed_before=01-2010`;
    } else if (!beerNameSearch && !AbvFilter && classicRangeFilter) {
      // classic range filter
      url += `&brewed_before=01-2010`;
    } else if (!beerNameSearch && AbvFilter && !classicRangeFilter) {
      // abv filter
      url += `&abv_gt=6`;
    }

    const response = await fetch(url);
    const data: Beer[] = await response.json();
    if (HighAcidityFilter) {
      const filteredHighAcidityBeers = acidityFilter(data);
      setBeers(filteredHighAcidityBeers);
    } else {
      setBeers(data);
    }
  };

  useEffect(() => {
    // run the code we want to run when the page first loads
    getBeers(
      searchNameTerm,
      filterAbv,
      filterClassicRange,
      filterHighAcidity,
      currentPage
    );
  }, [
    searchNameTerm,
    filterAbv,
    filterClassicRange,
    filterHighAcidity,
    currentPage,
  ]);

  const acidityFilter = (beers: Beer[]): Beer[] => {
    return beers.filter((beer) => beer.ph <= 4);
  };


  const totalPages = 9
  // for now hard coded value as previous function not working:
  // const totalPages = Math.ceil (beers.length/40) as beer.length is set to 40 per page as default

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  const handleNameSearch = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchNameTerm(cleanedInput);
  };

  const handleAbvFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterAbv(isChecked);
  };

  const handleClassicRangeFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterClassicRange(isChecked);
  };

  const handleAcidityFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterHighAcidity(isChecked);
  };


  return (
    <div className="app">
      <NavBar
        searchNameTerm={searchNameTerm}
        handleNameSearch={handleNameSearch}
        handleAbvFilter={handleAbvFilter}
        handleClassicRangeFilter={handleClassicRangeFilter}
        handleAcidityFilter={handleAcidityFilter}
      />
      <Main filteredBeers={beers} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
