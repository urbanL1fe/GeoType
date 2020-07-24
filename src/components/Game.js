import React, { useState, useEffect } from "react";
import "../styles.css";
import { useGetCountries } from "../useGetCountries";
import useVoiceTyping from "../useVoiceTyping";
import { fetchStatus } from "../utils";
import Question from "./Question";
import Timer from "./Timer";

export default function Game({
  fStatus,
  currentCountry,
  countriesLeft,
  streak,
  dispatch
}) {
  const [inputVal, setInputVal] = useState("");
  const [voiceCommand, setVoiceCommand] = useVoiceTyping(
    dispatch,
    setInputVal,
    currentCountry
  );
  useGetCountries(dispatch);

  const handleChange = e => {
    setInputVal(e.target.value);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      const trimmedVal = inputVal.trim();
      dispatch({ type: "INPUT_SUBMITTED", inputValue: trimmedVal });
      setInputVal("");
      setVoiceCommand("");
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
            value={inputVal || voiceCommand}
            placeholder="type city"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          {countriesLeft.length > 0 ? (
            <p>Countries Left: {countriesLeft.length}</p>
          ) : (
            dispatch({ type: "ALL_COUNTRIES_PLAYED" })
          )}
          <p>
            If you use voice command, say the city and "Go" to submit and then
            "Reset" before saying the next one
          </p>
        </>
      )}
    </>
  );
}
