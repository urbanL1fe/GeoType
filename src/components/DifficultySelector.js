import React from "react";
import "../styles.css";
import { populationPlusPerDifficulty } from "../utils";

function DifficultySelector({ onPicked }) {
  return (
    <>
      <h3>Select game difficulty and start game</h3>
      <button value="easy" onClick={onPicked}>
        Easy(>{populationPlusPerDifficulty.EASY} people)
      </button>
      <button value="normal" onClick={onPicked}>
        Normal(>{populationPlusPerDifficulty.NORMAL} people)
      </button>
      <button value="hard" onClick={onPicked}>
        Hard(All countries)
      </button>
    </>
  );
}

export default DifficultySelector;
