import React, { useEffect, useState, useRef } from "react";
import { bonusTimeFromStreak } from "../utils";
import "../styles.css";

function Timer({ dispatch, streak }) {
  const [counter, setCounter] = useState(60);
  const hasStreakUpdateHappened = useRef(false);

  useEffect(() => {
    const bonusTime = bonusTimeFromStreak(streak);
    if (bonusTime !== null && hasStreakUpdateHappened.current === false) {
      hasStreakUpdateHappened.current = true;
      setCounter(counter => counter + bonusTime);
    }
  }, [streak]);

  useEffect(() => {
    let timer = setTimeout(function() {
      setCounter(counter - 1);
    }, 1000);
    // eslint-disable-next-line no-unused-expressions
    counter > 0 && timer;
    hasStreakUpdateHappened.current = false;
    counter === 0 && dispatch({ type: "TIMES_UP" });
    return () => clearTimeout(timer);
  }, [counter, dispatch]);

  return <p className='timer'>{counter}</p>;
}

export default Timer;
