import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navigation from "./Navigation";

const Home = ({ dishes }) => {
  return (
    <div>
      <div className="head">
        <Navigation />
      </div>
      <div className="landing-page">
        <Hero />
      </div>
      <Menu dishes={dishes} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
