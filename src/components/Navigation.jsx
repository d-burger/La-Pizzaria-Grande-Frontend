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
      <button className="btn-order-online btn-nav">ORDER ONLINE</button>
    </nav>
  );
};

export default Navigation;
