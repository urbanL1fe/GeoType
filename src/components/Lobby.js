import React from "react";
import "../styles.css";

function Lobby({ dispatch }) {
  const handleDifficultyChange = e => {
    dispatch({ type: "DIFFICULTY_PICKED", difficulty: e.target.value });
  };

  return (
    <>
      <h1>GeoType</h1>
      <h2>What's the Capital?</h2>
      <p>Select game difficulty</p>
      <button value="easy" onClick={handleDifficultyChange}>
        Easy
      </button>
      <button value="normal" onClick={handleDifficultyChange}>
        Normal
      </button>
      <button value="hard" onClick={handleDifficultyChange}>
        Hard
      </button>
    </>
  );
}

export default Lobby;
