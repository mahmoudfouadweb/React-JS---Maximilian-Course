import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = ({onHideCart}) => {
  const cartItems = [
    {
      id: "c1",
      name: "Suchi",
      price: 12.99,
      amount: 2,
    },
  ];
  return (
    <Modal onHideCart={onHideCart}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
