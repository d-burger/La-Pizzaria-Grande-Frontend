import { Link } from "react-router-dom";
import companyIcon from "../images/company-icon.svg";

const NavigationOrder = () => {
  return (
    <nav className="navigation">
      <div className="company-logo">
        <img src={companyIcon} alt="" />
      </div>
      <ul className="nav-links">
        <Link to="/">
          {" "}
          <li className="nav-link">
            <a href="#">Back</a>
          </li>
        </Link>
      </ul>
      <Link to="/order-pizza">
        <button className="btn-order-online btn-nav">ORDER ONLINE</button>
      </Link>
    </nav>
  );
};

export default NavigationOrder;
