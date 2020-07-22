import React, { useReducer } from "react";
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
    streak
  } = state;
  return (
    <div className="App">
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
