import NavigationOrder from "./NavigationOrder";
import Footer from "./Footer";

const Order = () => {
  return (
    <div>
      {" "}
      <div className="head">
        <NavigationOrder />
      </div>
      <form action="">
        <div className="menu" id="menu">
          <div className="menu-container">
            <h1 className="menu-title">1. Choose dishes</h1>
            <div className="dishes">
              <div className="pizza-container">
                <h2 className="dish-title">Pizza</h2>
                <div className="pizza-dishes">
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Margherita
                    ........... 6,00€
                  </div>
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Vegetaria
                    ............ 8,00€
                  </div>
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Salami
                    ............... 8,50€
                  </div>
                </div>
              </div>
              <div className="salad-container">
                <h2 className="dish-title">Salad</h2>
                <div className="salad-dishes">
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Garden Salad
                    ......... 5,00€
                  </div>
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Caesar Salad
                    ......... 8,00€
                  </div>
                </div>
              </div>
              <div className="drinks-container">
                <h2 className="dish-title">Drinks</h2>
                <div className="drink-dishes">
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Coke
                    ................. 5,00€
                  </div>
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Fanta
                    ................ 5,00€
                  </div>
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Water
                    ................ 5,00€
                  </div>
                  <div className="dish">
                    <input type="number" min="1" max="5" /> Apple Juice
                    .......... 5,00€
                  </div>
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
              <input type="text" name="name" />
              <input type="text" name="email" />
              <input type="text" name="phone" />
              <input type="text" name="time" />
            </div>
          </div>
        </div>
        <div className="price-and-order">
          {" "}
          <h1 className="enter-data-title">3. Check price </h1>
          <div className="total">Total: 23€</div>
          <button className="btn-order-now">Order Now</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Order;
