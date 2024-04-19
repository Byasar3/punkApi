import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import "./NavBar.scss"
import Beer from '../../types/Beer';
import FilterComponent from '../FilterComponent/FilterComponent';

type NavBarProps = {
  beers: Beer[];
  setFilteredBeers: Dispatch<SetStateAction<Beer[]>>;
};

const NavBar = ({beers, setFilteredBeers} : NavBarProps) => {
	const [searchNameTerm, setSearchNameTerm] = useState<string>("")

	const handleNameSearch = (event : FormEvent<HTMLInputElement>) => {
		const cleanedInput = event.currentTarget.value.toLowerCase();
		setSearchNameTerm(cleanedInput);
		const filteredBeers = beers.filter((beer) => beer.name.toLowerCase().includes(cleanedInput))
		console.log(filteredBeers);
		setFilteredBeers(filteredBeers)
	}


  return (
    <div className="nav-bar">
      NavBar
      <FilterComponent
        nameOfWhatItIsFilteringFor="Search by name..."
        searchTerm={searchNameTerm}
        handleInput={handleNameSearch}
      />

    </div>

    // needs search for name function
    // needs tickbox function
  );
}

export default NavBar