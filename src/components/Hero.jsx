import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PizzaSlice from "../images/PizzaSlice.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-block">
        <h1 className="hero-title">WE LOVE PIZZA</h1>
        <button className="btn-order-online">ORDER ONLINE</button>
        <div className="address">
          {" "}
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="x" />
          </span>{" "}
          MARIENPLATZ 1, 80331 MÜNCHEN
        </div>
      </div>
      <div className="m-pizza-slice">
        <img src={PizzaSlice} alt="" />
      </div>
    </div>
  );
};

export default Hero;
