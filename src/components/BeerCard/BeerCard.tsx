import React from "react";
import "./BeerCard.scss";
import Beer from "../../types/Beer";

type BeerCardProps = {
  beers: Beer[];
};
const BeerCard = ({ beers }: BeerCardProps) => {
  return (
    <div className="beerCard">
      <div className="beerCard__info">
        {beers.map((beer) => (
          <div key={beer.id}>
            <img src={beer.image_url} alt="Beer Image" />
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p>{beer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeerCard;
