import { Link } from "react-router-dom";
import "./HomeButton.scss";

const HomeButton = () => {
  return (
    <div className="home-button-space">
      <Link to="/">
        <button className="home-button-space__button">Go Back</button>
      </Link>
    </div>
  );
};

export default HomeButton;
