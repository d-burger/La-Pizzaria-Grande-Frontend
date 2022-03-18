import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Order from "./components/Order";
import Admin from "./components/Admin";
import axios from "axios";

const App = () => {
  //-------- USESTATE ------------------------
  const [dishes, setDishes] = useState([]);

  //-------- USEEFFECT ------------------------
  useEffect(() => {
    fetchDishes();
  }, []);

  //-------- FUNCTIONS -----------------------
  const fetchDishes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/dishes");
      setDishes(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home dishes={dishes} />} />
        <Route path="/order-pizza" element={<Order dishes={dishes} />} />
        <Route path="/admin" element={<Admin dishes={dishes} />} />
      </Routes>
    </div>
  );
};

export default App;
