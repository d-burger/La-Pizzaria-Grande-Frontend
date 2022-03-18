import NavigationAdmin from "./NavigationAdmin";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";

const Admin = ({ dishes }) => {
  //-------- USESTATE ------------------------
  const [orders, setOrders] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="head">
        <NavigationAdmin />
      </div>
      <div className="orders">
        <div className="order">
          {" "}
          <div className="order-name">Hans</div>
          <div className="ordered-dishes">
            <div className="ordered-dish">Margherita</div>
            <div className="ordered-dish">Margherita</div>
            <div className="ordered-dish">Margherita</div>
          </div>
          <div className="order-total">Total: 23€</div>
          <button className="btn-order-delete">Delete</button>
        </div>
        <div className="order">
          {" "}
          <div className="order-name">Hans</div>
          <div className="ordered-dishes">
            <div className="ordered-dish">Margherita</div>
            <div className="ordered-dish">Margherita</div>
            <div className="ordered-dish">Margherita</div>
          </div>
          <div className="order-total">Total: 23€</div>
          <button className="btn-order-delete">Delete</button>
        </div>
      </div>
      <div className="edit-menu">
        <div className="menu-container">
          <h1 className="menu-title">Menu</h1>
          <div className="dishes">
            <div className="pizza-container">
              <h2 className="dish-title">Pizza</h2>
              <div className="pizza-dishes">
                {dishes.map((dish, index) => {
                  if (dish.dish_category === "pizza")
                    return (
                      <div key={index}>
                        <div className="dish">
                          <div className="dish-name">{dish.dish_name}</div>
                          <div className="dots">........... </div>
                          <div className="dish-price">{dish.dish_price}€ </div>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
            <div className="salad-container">
              <h2 className="dish-title">Salad</h2>
              <div className="salad-dishes">
                {dishes.map((dish, index) => {
                  if (dish.dish_category === "salad")
                    return (
                      <div key={index}>
                        <div className="dish">
                          <div className="dish-name">{dish.dish_name}</div>
                          <div className="dots">........... </div>
                          <div className="dish-price">{dish.dish_price}€ </div>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
            <div className="drinks-container">
              <h2 className="dish-title">Drinks</h2>
              <div className="drink-dishes">
                {dishes.map((dish, index) => {
                  if (dish.dish_category === "drink")
                    return (
                      <div key={index}>
                        <div className="dish">
                          <div className="dish-name">{dish.dish_name}</div>
                          <div className="dots">........... </div>
                          <div className="dish-price">{dish.dish_price}€ </div>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
