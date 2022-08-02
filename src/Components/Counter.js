import React from "react";

const Counter = () => {
  let [count, setCount] = React.useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={sub}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
};

export default Counter;
