import { FormEvent, useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Beer from "./types/Beer";
import Pagination from "./components/Pagination/Pagination";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeerInfo from "./components/BeerInfo/BeerInfo";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  // search stuff
  const [searchNameTerm, setSearchNameTerm] = useState<string>("");
  const [filterAbv, setFilterAbv] = useState<boolean>(false);
  const [filterClassicRange, setFilterClassicRange] = useState<boolean>(false);
  const [filterHighAcidity, setFilterHighAcidity] = useState<boolean>(false);

  const getBeers = async (
    beerNameSearch: string,
    AbvFilter: boolean,
    classicRangeFilter: boolean,
    HighAcidityFilter: boolean,
    pageNumber: number
  ) => {
    let url = `http://localhost:3333/v2/beers?page=${pageNumber}&per_page=40`;
    let allBeers: Beer[] = [];
    let totalCount = 0;

    // cases where different parameters are entered:
    while (true) {
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

      if (data.length === 0) {
        break;
      }

      allBeers = allBeers.concat(data);

      pageNumber++;

      url = `http://localhost:3333/v2/beers?page=${pageNumber}&per_page=40`;
      totalCount += data.length;

      const itemsPerPage = 40;
      const totalPages = Math.ceil(totalCount / itemsPerPage);
      setTotalPages(totalPages);

      if (HighAcidityFilter) {
        const filteredHighAcidityBeers = acidityFilter(allBeers);
        setBeers(filteredHighAcidityBeers);
      } else {
        setBeers(allBeers);
      }
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


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNameSearch = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchNameTerm(cleanedInput);
    setCurrentPage(1);
  };

  const handleAbvFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterAbv(isChecked);
    setCurrentPage(1);
  };

  const handleClassicRangeFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterClassicRange(isChecked);
    setCurrentPage(1);
  };

  const handleAcidityFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterHighAcidity(isChecked);
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar
          searchNameTerm={searchNameTerm}
          handleNameSearch={handleNameSearch}
          handleAbvFilter={handleAbvFilter}
          handleClassicRangeFilter={handleClassicRangeFilter}
          handleAcidityFilter={handleAcidityFilter}
        />
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Main filteredBeers={beers} />} />
            <Route
              path="/beer/:beerId"
              element={<BeerInfo filteredBeers={beers} />}
            />
          </Routes>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
