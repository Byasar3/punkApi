import React from "react";
import "./BeerCard.scss";
import Beer from "../../types/Beer";

type BeerCardProps = {
  beers: Beer[];
  filterAbv: boolean;
  filterClassicRange: boolean;
  filterHighAcidity: boolean;
};
const BeerCard = ({
  beers,
  filterAbv,
  filterClassicRange,
  filterHighAcidity,
}: BeerCardProps) => {

  return (

    <div className="beer-card-container">
      {beers.map((beer) => (
        <div key={beer.id} className="beer-card">
          <img
            src={beer.image_url}
            alt="Beer Image"
            className="beer-card__image"
          />
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <p>{beer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BeerCard;
