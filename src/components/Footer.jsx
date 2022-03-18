import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="information-container m-footer">
        <div className="flex">
          {" "}
          <div className="icon-container">
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
          </div>
          <div>Marienplatz 1, 80331 München</div>
        </div>
        <div className="flex">
          {" "}
          <div className="icon-container">
            {" "}
            <a href="tel:0123456789">
              <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
            </a>
          </div>
          <a href="tel:0123456789">
            <div>0123 456789</div>
          </a>
        </div>
        <div className="flex">
          {" "}
          <div className="icon-container">
            <a href="mailto:pizzalover@xyz.com">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
          </div>
          <a href="mailto:pizzalover@xyz.com">
            {" "}
            <div>pizzalover@xyz.com</div>
          </a>
        </div>
      </div>
      <div>Copyright PizzaLover</div>
      <Link to="/admin">
        <button className="btn-login">Login</button>
      </Link>
    </div>
  );
};

export default Footer;
