import { useState } from 'react'
import "./Main.scss"
import BeerCardList from '../BeerCardList/BeerCardList'
import Beer from "../../types/Beer";

type MainProps = {
	filteredBeers : Beer[];
}

const Main = ({filteredBeers} : MainProps) => {

  console.log(filteredBeers);
  
  return (
    <div className="main">
      <BeerCardList beers={filteredBeers} />
      <> </>
    </div>
  );
}

export default Main