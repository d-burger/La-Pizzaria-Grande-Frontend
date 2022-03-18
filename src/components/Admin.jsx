import NavigationAdmin from "./NavigationAdmin";
import Footer from "./Footer";

const Admin = () => {
  return (
    <div>
      <div className="head">
        <NavigationAdmin />
      </div>
      <div className="orders">
        {" "}
        <h1 className="orders-title">Orders </h1>
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
                <div className="dish"> Margherita ........... 6,00€</div>
                <div className="dish"> Vegetaria ............ 8,00€</div>
                <div className="dish"> Salami ............... 8,50€</div>
              </div>
            </div>
            <div className="salad-container">
              <h2 className="dish-title">Salad</h2>
              <div className="salad-dishes">
                <div className="dish"> Garden Salad ......... 5,00€</div>
                <div className="dish"> Caesar Salad ......... 8,00€</div>
              </div>
            </div>
            <div className="drinks-container">
              <h2 className="dish-title">Drinks</h2>
              <div className="drink-dishes">
                <div className="dish"> Coke ................. 5,00€</div>
                <div className="dish"> Fanta ................ 5,00€</div>
                <div className="dish"> Water ................ 5,00€</div>
                <div className="dish"> Apple Juice .......... 5,00€</div>
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
