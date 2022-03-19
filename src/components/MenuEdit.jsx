const MenuEdit = ({ dishes }) => {
  return (
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
  );
};

export default MenuEdit;
