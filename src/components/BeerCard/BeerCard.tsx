import "./BeerCard.scss";
import Beer from "../../types/Beer";
import { Link } from "react-router-dom";

type BeerCardProps = {
  filteredBeers: Beer[];
};
const BeerCard = ({ filteredBeers }: BeerCardProps) => {
  return (
    <div className="beer-card-container">
      {filteredBeers.map((beer) => (
        <div key={beer.id} className="beer-card">
          <Link to={`/beer/${beer.id}`} data-testid="beer-link">
            <img
              src={beer.image_url}
              alt="Beer Image"
              className="beer-card__image"
            />
          </Link>
          <div className="beer-card__info">
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p>{beer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeerCard;
