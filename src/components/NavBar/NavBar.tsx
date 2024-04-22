import { Dispatch, FormEvent, SetStateAction } from "react";
import "./NavBar.scss";
import Beer from "../../types/Beer";
import FilterComponent from "../FilterComponent/FilterComponent";

type NavBarProps = {
  beers: Beer[];
  setFilteredBeers: Dispatch<SetStateAction<Beer[]>>;
  searchNameTerm: string;
  setSearchNameTerm: Dispatch<SetStateAction<string>>;
  setFilterAbv: Dispatch<SetStateAction<boolean>>;
  setFilterClassicRange: Dispatch<SetStateAction<boolean>>;
  setFilterHighAcidity: Dispatch<SetStateAction<boolean>>;
};

const NavBar = ({
  beers,
  setFilteredBeers,
  searchNameTerm,
  setSearchNameTerm,
  setFilterAbv,
  setFilterClassicRange,
  setFilterHighAcidity,
}: NavBarProps) => {

  const handleNameSearch = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setSearchNameTerm(cleanedInput);
    const filteredBeers = beers.filter((beer) =>
      beer.name.toLowerCase().includes(cleanedInput)
    );
    setFilteredBeers(filteredBeers);
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
    <div className="nav-bar">
      NavBar
      <FilterComponent
        type="text"
        nameOfFilter="Search by name"
        searchTerm={searchNameTerm}
        handleInput={handleNameSearch}
      />
      <FilterComponent
        type="checkbox"
        nameOfFilter="High Alcohol"
        handleInput={handleAbvFilter}
      />
      <FilterComponent
        type="checkbox"
        nameOfFilter="Classic Range"
        handleInput={handleClassicRangeFilter}
      />
      <FilterComponent
        type="checkbox"
        nameOfFilter="High Acidity"
        handleInput={handleAcidityFilter}
      />
    </div>
  );
};

export default NavBar;
