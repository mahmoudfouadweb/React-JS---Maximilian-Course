import React from "react";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartItems = [
    {
      id: "c1",
      name: "Suchi",
      price: 12.99,
      amount: 2,
    },
  ];
  return (
    <div>
      <div>
        <ul className={classes["cart-items"]}>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
      </div>
    </div>
  );
};

export default Cart;
