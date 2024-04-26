import { FormEvent } from "react";
import "./NavBar.scss";
import FilterComponent from "../FilterComponent/FilterComponent";

type NavBarProps = {
  searchNameTerm: string;
  handleNameSearch: (event: FormEvent<HTMLInputElement>) => void;
  handleAbvFilter: (event: FormEvent<HTMLInputElement>) => void;
  handleClassicRangeFilter: (event: FormEvent<HTMLInputElement>) => void;
  handleAcidityFilter: (event: FormEvent<HTMLInputElement>) => void;
};

const NavBar = ({
  searchNameTerm,
  handleNameSearch,
  handleAbvFilter,
  handleClassicRangeFilter,
  handleAcidityFilter,
}: NavBarProps) => {
  return (
    <div className="nav-bar">
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
