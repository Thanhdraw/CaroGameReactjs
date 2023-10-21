import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Components/CaroGame/Style.scss";
import UseState from "./useState/Count/UseState";
import Toggle from "./useState/Toggle/Toggle";
import Card from "./Components/Card-Info/Card";
import CardList from "./Components/Card-Info/CardList";
import { Data } from "./Data";
import Button from "./Components/Button/Button";
import Newcard from "./Components/card/Newcard";
import Products from "./Components/products/Products";
import ProductLists from "./Components/products/ProductLists";
import Game from "./Components/CaroGame/Game";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <CardList></CardList> */}
      {/* <ProductLists></ProductLists> */}
      <Game></Game>
    </div>
  );
}

export default App;
