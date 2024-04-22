import "./BeerCardList.scss"
import BeerCard from '../BeerCard/BeerCard'
import Beer from '../../types/Beer';

type BeerCardListProps = {
  beers: Beer[];
  filterAbv: boolean;
  filterClassicRange: boolean;
  filterHighAcidity: boolean;
};

const BeerCardList = ({
  beers,
  filterAbv,
  filterClassicRange,
  filterHighAcidity,
}: BeerCardListProps) => {
  return (
    <div className="beer-card-list">
      Here is the list of beers
      <BeerCard
        beers={beers}
        filterAbv={filterAbv}
        filterClassicRange={filterClassicRange}
        filterHighAcidity={filterHighAcidity}
      />
    </div>
  );
};

export default BeerCardList