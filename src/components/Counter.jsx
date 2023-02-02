import { useState, useEffect } from "react";

const Counter = () => {
  const now = new Date();
  let actualHour = now.getHours();
  let [clockState, setClockState] = useState(now.toLocaleTimeString());
  let [checkState, setCheckState] = useState(1);
  let [seconds, setSeconds] = useState("");
  let [minutes, setMinutes] = useState("");
  let [hours, setHours] = useState(actualHour);

  let radioState = (e) => {
    setCheckState(e.target.value);
  };

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let now = date.toLocaleTimeString();

      setClockState(now);
    }, 1000);
  });
  return (
    <>
      <h1 className="subTitle">Clock</h1>
      <div id="counter">
        <p>{clockState}</p>

        <div id="radioButtons">
          <span>
            <input
              type={"radio"}
              value="1"
              checked={checkState == 1 ? true : false}
              onChange={radioState}
            />
            Hour
          </span>
          <span>
            <input
              type={"radio"}
              value="2"
              checked={checkState == 2 ? true : false}
              onChange={radioState}
            />
            Minutes
          </span>
          <span>
            <input
              type={"radio"}
              value="3"
              checked={checkState == 3 ? true : false}
              onChange={radioState}
            />
            Seconds
          </span>
        </div>

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
