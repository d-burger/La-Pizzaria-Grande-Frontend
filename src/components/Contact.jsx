import { Map, Marker } from "pigeon-maps";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-information">
        <h2>Contact</h2>
        <div>Marienplatz 1, 80331 München</div>
        <div>0123 456789</div>
        <div>Pizzalover@xyz.com</div>
      </div>
      <div className="map-container">
        {" "}
        <Map
          className="map"
          height={300}
          width={600}
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
