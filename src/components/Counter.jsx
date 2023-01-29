import { useState, useEffect } from "react";

const Counter = () => {
  const [clockState, setClockState] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  });
  return (
    <>
      <h1 className="subTitle">useState & useEffect</h1>
      <div id="counter">
        <p>{clockState}</p>
        <div id="buttonsCounter">
          <button>Add</button>
          <button>Substract</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
