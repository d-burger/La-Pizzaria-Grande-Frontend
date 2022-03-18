import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Order from "./components/Order";
import Admin from "./components/Admin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-pizza" element={<Order />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
