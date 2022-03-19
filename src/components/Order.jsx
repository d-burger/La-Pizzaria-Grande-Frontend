import NavigationOrder from "./NavigationOrder";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Order = ({ dishes }) => {
  const { register, handleSubmit } = useForm();

  //-------- USESTATE ------------------------
  const [data, setData] = useState("");
  const [total, setTotal] = useState();

  //-------- USEEFFECT -----------------------
  useEffect(() => {});

  //-------- FUNCTIONS -----------------------
  const changeHandler = () => {
    console.log("hi");
    console.log(register("Margherita"));
  };

  const onSubmit = async (dataForm) => {
    Object.keys(dataForm).forEach((key) => {
      if (dataForm[key] === "") {
        delete dataForm[key];
      }
    });
    const food = { ...dataForm };
    Object.keys(food).forEach((key) => {
      if (key == "name" || key == "time" || key == "phone" || key == "email") {
        delete food[key];
      }
    });
    dataForm.order = Object.entries(food);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/orders",
        dataForm
      );
      alert("Thank you for your order!");
      window.location.replace("http://localhost:3000/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <div className="head">
        <NavigationOrder />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="menu" id="menu">
          <div className="menu-container">
            <h1 className="menu-title">1. Choose dishes</h1>
            <div className="dishes">
              <div className="pizza-container">
                <h2 className="dish-title">Pizza</h2>
                <div className="pizza-dishes">
                  {dishes.map((dish, index) => {
                    if (dish.dish_category === "pizza")
                      return (
                        <div key={index}>
                          <div className="dish">
                            <input
                              {...register(dish.dish_name)}
                              type="number"
                              min="1"
                              max="5"
                              onChange={changeHandler}
                            />{" "}
                            <div className="dish-name">{dish.dish_name}</div>
                            <div className="dots">........... </div>
                            <div className="dish-price">
                              {dish.dish_price}€{" "}
                            </div>
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
                            <input
                              {...register(dish.dish_name)}
                              type="number"
                              min="1"
                              max="5"
                            />{" "}
                            <div className="dish-name">{dish.dish_name}</div>
                            <div className="dots">........... </div>
                            <div className="dish-price">
                              {dish.dish_price}€{" "}
                            </div>
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
                            <input
                              {...register(dish.dish_name)}
                              type="number"
                              min="1"
                              max="5"
                            />{" "}
                            <div className="dish-name">{dish.dish_name}</div>
                            <div className="dots">........... </div>
                            <div className="dish-price">
                              {dish.dish_price}€{" "}
                            </div>
                          </div>
                        </div>
                      );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-completion-container">
          <h1 className="enter-data-title">2. Enter your data </h1>
          <div className="order-completion">
            {" "}
            <div className="labels">
              <div>Name:</div>
              <div>Email:</div>
              <div>Phone number:</div>
              <div>Pickup time:</div>
            </div>
            <div className="inputs-order-completion">
              {" "}
              <input {...register("name")} type="text" name="name" />
              <input {...register("email")} type="text" name="email" />
              <input {...register("phone")} type="text" name="phone" />
              <input {...register("time")} type="text" name="time" />
            </div>
          </div>
        </div>
        <div className="price-and-order">
          {" "}
          <h1 className="enter-data-title">3. Check price </h1>
          <div className="total">Total: 23€</div>
          <button className="btn-order-now" type="submit">
            Order Now
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Order;
