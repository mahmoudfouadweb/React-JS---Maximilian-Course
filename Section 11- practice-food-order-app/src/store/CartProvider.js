import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = () => {};

  const removeItemFromCartHandler = (idx) => {};

  const cartContext = {
    item: [],
    amount: 0,
    addItem: addItemToCartHandler,
    removerItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
