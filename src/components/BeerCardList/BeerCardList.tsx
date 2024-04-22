import "./BeerCardList.scss"
import BeerCard from '../BeerCard/BeerCard'
import Beer from '../../types/Beer';

type BeerCardListProps = {
  beers: Beer[];
};

const BeerCardList = ({
  beers,
}: BeerCardListProps) => {
  return (
    <div className="beer-card-list">
      Here is the list of beers
      <BeerCard
        beers={beers}
      />
    </div>
  );
};

export default BeerCardList