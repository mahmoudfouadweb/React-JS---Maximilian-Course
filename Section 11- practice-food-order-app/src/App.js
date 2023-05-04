import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <h2>Let's get started!</h2>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;