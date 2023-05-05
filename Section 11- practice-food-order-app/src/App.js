import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showModalHandler = () => {
    setCartIsShown(true);
  };

  const hideModalHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && (
        <Cart onHideCart={hideModalHandler} />
      )}
      <Header onShowCart={showModalHandler}/>
      <h2>Let's get started!</h2>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
