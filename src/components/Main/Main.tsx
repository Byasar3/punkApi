import "./Main.scss";
import BeerCardList from "../BeerCardList/BeerCardList";
import Beer from "../../types/Beer";

type MainProps = {
  filteredBeers: Beer[];
};

const Main = ({ filteredBeers }: MainProps) => {
  return (
    <div className="main">
      <BeerCardList filteredBeers={filteredBeers} />
    </div>
  );
};

export default Main;
