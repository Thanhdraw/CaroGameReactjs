import React, { useState } from "react";
import "./Style.css";
const UseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div>
      <div>
        <div>{count}</div>

        <button onClick={handleIncrease}>Increment</button>

        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={handleDecrease}>Decrement</button>
      </div>
    </div>
  );
};

export default UseState;
