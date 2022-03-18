import { Map, Marker } from "pigeon-maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-information">
        <h2 className="contact-title">Contact</h2>
        <div className="information-container">
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
      </div>
      <div className="map-container">
        {" "}
        <Map
          className="map"
          height={300}
          // width={300}
          defaultCenter={[48.137154, 11.576124]}
          defaultZoom={15}
        >
          <Marker width={50} anchor={[48.137154, 11.576124]} />
        </Map>
      </div>
    </div>
  );
};

export default Contact;
