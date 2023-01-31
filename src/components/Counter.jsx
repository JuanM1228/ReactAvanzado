import { useState, useEffect } from "react";

const Counter = () => {
  let now = new Date();
  let actualHour = now.getHours();
  const [clockState, setClockState] = useState("---");
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState(actualHour);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
      console.log(hours);
    }, 1000);
  });
  return (
    <>
      <h1 className="subTitle">useState & useEffect</h1>
      <div id="counter">
        <p>{clockState + hours}</p>
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
