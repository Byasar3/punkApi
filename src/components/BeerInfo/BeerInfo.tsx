import Beer from "../../types/Beer";
import { useParams } from "react-router-dom";
import "./BeerInfo.scss"

type BeerInfoProps = {
  filteredBeers: Beer[];
};
const BeerInfo = ({ filteredBeers }: BeerInfoProps) => {
  const { beerId } = useParams();

  console.log(beerId);
  console.log(filteredBeers);

  const beer = filteredBeers.find((beer) => beer.id === Number(beerId));

  console.log(beer);

  if (beer === undefined) return <p> Cannot find beer with that id</p>;

  return (
    <div className="beer-info">
      <h2 className="beer-info__name">{beer.name}</h2>
      <h4 className="beer-info__tagline">{beer.tagline}</h4>
	  <div className="beer-info__mid-section">
		<img src={beer.image_url} alt="Beer Image" className="beer-info__image" />
		<div className="beer-info__mid-section-facts">
      <p className="beer-info__first-brewed"> First brewed: {beer.first_brewed}</p>
      <p className="beer-info__abv">ABV: {beer.abv}</p>
      <p className="beer-info__ibu">IBU: {beer.ibu}</p>
      <p className="beer-info__ph">pH: {beer.ph}</p>

		</div>
	  </div>
      
      <p className="beer-info__description">{beer.description}</p>
      <h3 className="beer-info__ingredients"> Ingredients: </h3>
      <ul className="beer-info__ingredients-list">
        <li className="beer-info__malt">
          Malt: {beer.ingredients.malt.map((malt) => malt.name).join(", ")}
        </li>
        <li className="beer-info__hops">
          Hops: {beer.ingredients.hops.map((hop) => hop.name).join(", ")}
        </li>
        <li className="beer-info__yeast">Yeast: {beer.ingredients.yeast}</li>
      </ul>
      <h3 className="beer-info__food-pairings">Food Pairings: </h3>
      <p className="beer-info__dishes"> {beer.food_pairing.join(", ")}</p>
    </div>
  );
};

export default BeerInfo;
