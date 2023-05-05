import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showModalHandler = () => {
    setCartIsShown(true);
  };
  const hideModalHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideModalHandler} />}
      <Header onShowCart={showModalHandler} />
      <h2>Let's get started!</h2>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
