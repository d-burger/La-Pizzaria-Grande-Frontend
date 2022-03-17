import "./styles/app.scss";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <div className="landing-page">
        <Navigation />
        <Hero />
      </div>
      <Menu />
      <Contact />
    </div>
  );
};

export default App;
