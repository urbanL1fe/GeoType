import React, { useReducer, useEffect } from "react";
import "./styles.css";
import {
  countriesReducer,
  initialCountriesReducerState
} from "./countriesReducer";
import Lobby from "./components/Lobby";
import Game from "./components/Game";
import Results from "./components/Results";
import { gameStatus } from "./utils";

export default function App() {
  const [state, dispatch] = useReducer(
    countriesReducer,
    initialCountriesReducerState
  );
  const {
    fStatus,
    gStatus,
    difficulty,
    score,
    currentCountry,
    countriesLeft,
    answers,
    streak,
    insetAppShadow,
  } = state;
  const appClasses = `App ${insetAppShadow}`
  
  useEffect(()=>{
    setTimeout(() => {
       dispatch({type:'RESET_ANSWER_STYLE'})
    }, 500);
  },[insetAppShadow])
  return (
    <div className={appClasses}>
      {difficulty === "" && <Lobby dispatch={dispatch} />}
      {gStatus === gameStatus.PLAYING && (
        <Game
          fStatus={fStatus}
          currentCountry={currentCountry}
          countriesLeft={countriesLeft}
          streak={streak}
          dispatch={dispatch}
        />
      )}
      {gStatus === gameStatus.RESULTS && (
        <Results score={score} answers={answers} />
      )}
    </div>
  );
}
