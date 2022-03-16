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
          <a href="#">MENU</a>
        </li>
        <li className="nav-link">
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <button>ORDER ONLINE</button>
    </nav>
  );
};

export default Navigation;
