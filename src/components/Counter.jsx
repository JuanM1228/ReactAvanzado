import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClickAdd = () => {
    setCounter(counter + 1);
  };

  const onClickSubstract = () => {
    setCounter(counter - 1);
  };

  const onClickReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1 className="subTitle">UseState</h1>
      <div id="counter">
        <p>{counter}</p>
        <div id="buttonsCounter">
          <button onClick={onClickAdd}>Add</button>
          <button onClick={onClickSubstract}>Substract</button>
          <button onClick={onClickReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
