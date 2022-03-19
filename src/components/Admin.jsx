import NavigationAdmin from "./NavigationAdmin";
import Orders from "./Orders";
import MenuEdit from "./MenuEdit";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";

const Admin = ({ dishes }) => {
  //-------- USESTATE ------------------------
  const [orders, setOrders] = useState("");
  const [ordersLoaded, setOrdersLoaded] = useState(false);

  //-------- USEEFFECT ------------------------
  useEffect(() => {
    fetchOrders();
  }, []);

  //-------- FUNCTIONS -----------------------
  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/orders");
      setOrders(data);
      console.log(data);
      setOrdersLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="head">
        <NavigationAdmin />
      </div>
      <Orders orders={orders} ordersLoaded={ordersLoaded} />
      <MenuEdit dishes={dishes} />
      <Footer />
    </div>
  );
};

export default Admin;
