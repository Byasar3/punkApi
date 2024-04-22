import { useState } from 'react'
import "./Main.scss"
import BeerCardList from '../BeerCardList/BeerCardList'
import Beer from "../../types/Beer";

type MainProps = {
  filteredBeers: Beer[];
  filterAbv: boolean;
  filterClassicRange: boolean;
  filterHighAcidity: boolean;
};

const Main = ({
  filteredBeers,
  filterAbv,
  filterClassicRange,
  filterHighAcidity,
}: MainProps) => {
  console.log(filteredBeers);

  return (
    <div className="main">
      <BeerCardList
        beers={filteredBeers}
        filterAbv={filterAbv}
        filterClassicRange={filterClassicRange}
        filterHighAcidity={filterHighAcidity}
      />
      <> </>
    </div>
  );
};

export default Main