import { Link } from "react-router-dom";
import companyIcon from "../images/company-icon.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="company-logo">
        <img src={companyIcon} alt="" />
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#">HOME</a>
        </li>
        <li className="nav-link">
          <a href="#menu">MENU</a>
        </li>
        <li className="nav-link">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <Link to="/order-pizza">
        <button className="btn-order-online btn-nav">ORDER ONLINE</button>
      </Link>
    </nav>
  );
};

export default Navigation;
