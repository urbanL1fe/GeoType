import React from "react";
import "../styles.css";
import { populationPlusPerDifficulty } from "../utils";

function DifficultySelector({ onPicked }) {
  return (
    <>
      <div class='buttonWrapper'>
      <button className='button green-gradient' value="easy" onClick={onPicked}>
        Easy
      </button>
      <button className='button orange-gradient' value="normal" onClick={onPicked}>
        Normal
      </button>
      <button className='button red-gradient' value="hard" onClick={onPicked}>
        Hard
      </button>
      </div>
        <h3>Select game difficulty and start game</h3>
    </>
  );
}

export default DifficultySelector;
