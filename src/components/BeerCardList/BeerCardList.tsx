import "./BeerCardList.scss"
import BeerCard from '../BeerCard/BeerCard'
import Beer from '../../types/Beer';

type BeerCardListProps = {
  filteredBeers: Beer[];
};

const BeerCardList = ({ filteredBeers }: BeerCardListProps) => {
  return (
    <div className="beer-card-list">
      Here is the list of beers
      <BeerCard filteredBeers={filteredBeers} />
    </div>
  );
};

export default BeerCardList