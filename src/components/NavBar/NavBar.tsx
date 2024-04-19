import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import "./NavBar.scss";
import Beer from "../../types/Beer";
import FilterComponent from "../FilterComponent/FilterComponent";

type NavBarProps = {
  beers: Beer[];
  setFilteredBeers: Dispatch<SetStateAction<Beer[]>>;
};

const NavBar = ({ beers, setFilteredBeers }: NavBarProps) => {
  const [searchNameTerm, setSearchNameTerm] = useState<string>("");
  const [filterAbv, setFilterAbv] = useState<boolean>(false);
  const [filterClassicRange, setFilterClassicRange] = useState<boolean>(false);
  const [filterHighAcidity, setFilterHighAcidity] = useState<boolean>(false);

  const handleNameSearch = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchNameTerm(cleanedInput);
    const filteredBeers = beers.filter((beer) =>
      beer.name.toLowerCase().includes(cleanedInput)
    );
    console.log(filteredBeers);
    setFilteredBeers(filteredBeers);
  };

  const handleAbvFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterAbv(isChecked);
    const filterAbv = isChecked ? beers.filter((beer) => beer.abv > 6) : beers;
    setFilteredBeers(filterAbv);
  };

  const handleClassicRangeFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterClassicRange(isChecked);
    const filteredClassicRange = isChecked
      ? beers.filter((beer) => {
          const yearBrewed = parseInt(beer.first_brewed.split("/")[1]);
          return yearBrewed < 2010;
        })
      : beers;
    setFilteredBeers(filteredClassicRange);
  };

  const handleAcidityFilter = (event: FormEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilterHighAcidity(isChecked);
    const filteredBeersAcidity = isChecked
      ? beers.filter((beer) => beer.ph < 4)
      : beers;
    setFilteredBeers(filteredBeersAcidity);
  };

  return (
    <div className="nav-bar">
      NavBar
      <FilterComponent
        type="text"
        nameOfWhatItIsFilteringFor="Search by name"
        searchTerm={searchNameTerm}
        handleInput={handleNameSearch}
      />
      <FilterComponent
        type="checkbox"
        nameOfWhatItIsFilteringFor="High Alcohol"
        handleInput={handleAbvFilter}
      />
      <FilterComponent
        type="checkbox"
        nameOfWhatItIsFilteringFor="Classic Range"
        handleInput={handleClassicRangeFilter}
      />
      <FilterComponent
        type="checkbox"
        nameOfWhatItIsFilteringFor="High Acidity"
        handleInput={handleAcidityFilter}
      />
    </div>

    // needs search for name function
    // needs tickbox function
  );
};

export default NavBar;
