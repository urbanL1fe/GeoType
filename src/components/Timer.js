import React, { useEffect, useState, useRef } from "react";
import "../styles.css";

function Timer({ dispatch, streak }) {
  const [counter, setCounter] = useState(60);
  const [hasStreakUpdateHappened, setHasStreakUpdateHappened] = useState(false);
  // Thewritika prosthetei 10 sto timer otan to streak ginei 3
  useEffect(() => {
    console.log("streak");
    if (streak === 3 && hasStreakUpdateHappened === false) {
      setHasStreakUpdateHappened(true);
      setCounter(counter => counter + 10);
    }
  }, [streak]);
  // afairei 1 ap to timer kathe second
  useEffect(() => {
    counter > 0 &&
      setTimeout(function() {
        if (!hasStreakUpdateHappened) {
          setCounter(counter - 1);
        }
      }, 1000);
    counter === 0 && dispatch({ type: "TIMES_UP" });
  }, [counter, dispatch]);

  return <p>{counter}</p>;
}

export default Timer;
