const Orders = ({ orders, ordersLoaded }) => {
  return (
    <div className="orders">
      <h1 className="orders-title">Orders</h1>
      {ordersLoaded ? (
        <>
          {orders.map((order, index) => (
            <div className="order">
              <div className="order-name">{order.name}</div>
              <div className="ordered-dishes">
                {order.order.map((el) => (
                  <div className="ordered-dish">
                    {el[1]}x {el[0]}
                  </div>
                ))}
              </div>
              <div className="order-total">Total: 23€</div>
              <button className="btn-order-delete">Delete</button>
            </div>
          ))}
        </>
      ) : (
        <div>Nothing has been ordered.</div>
      )}
    </div>
  );
};

export default Orders;
