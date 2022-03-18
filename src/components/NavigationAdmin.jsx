import { Link } from "react-router-dom";
import companyIcon from "../images/company-icon.svg";

const NavigationAdmin = () => {
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
      <Link to="/">
        <button className="btn-order-online btn-nav">Logout</button>
      </Link>
    </nav>
  );
};

export default NavigationAdmin;
