import React, { useState } from "react";
import "../styles.css";
import { useGetCountries } from "../useGetCountries";
import { fetchStatus } from "../utils";
import Question from "./Question";
import Timer from "./Timer";

export default function Game({ fStatus, currentCountry, streak, dispatch }) {
  const [inputVal, setInputVal] = useState("");

  useGetCountries(dispatch);

  const handleChange = e => {
    setInputVal(e.target.value);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      const trimmedVal = inputVal.trim();
      dispatch({ type: "INPUT_SUBMITTED", inputValue: trimmedVal });
      setInputVal("");
    }
  };

  if (fStatus === fetchStatus.ERROR) {
    return <p>Please reload the app...</p>;
  }
  return (
    <>
      {fStatus === fetchStatus.LOADING && <p>Loading...</p>}
      {fStatus === fetchStatus.SUCCESS && (
        <>
          <Timer dispatch={dispatch} streak={streak} />
          <Question country={currentCountry} />
          <input
            type="text"
            value={inputVal}
            placeholder="type city"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </>
      )}
    </>
  );
}
