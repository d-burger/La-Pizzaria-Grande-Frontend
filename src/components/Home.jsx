import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <div className="head">
        <Navigation />
      </div>
      <div className="landing-page">
        <Hero />
      </div>
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
