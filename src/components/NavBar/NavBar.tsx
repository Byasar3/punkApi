import React from 'react'
import "./NavBar.scss"
import SearchBox from '../SearchBox/SearchBox'
import FilterBox from '../FilterBox/FilterBox'

const NavBar = () => {
  return (
    <div className="nav-bar">
      NavBar
      <SearchBox />
      <FilterBox />
      <FilterBox />
      <FilterBox />
    </div>

    // needs search for name function
    // needs tickbox function
  );
}

export default NavBar