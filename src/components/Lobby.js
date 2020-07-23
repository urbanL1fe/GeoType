import React, { useState } from "react";
import ContinentsSelector from "./ContinentsSelector";
import { populationPlusPerDifficulty } from "../utils";
import "../styles.css";

function Lobby({ dispatch }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleDifficultyChange = e => {
    dispatch({
      type: "DIFFICULTY_PICKED",
      difficulty: e.target.value,
      continentsInPlay: checkedItems
    });
  };

  const handleContinentChange = e => {
    const checkBoxPicked = e.target.name;
    const newCkeckedArray = checkedItems.includes(checkBoxPicked)
      ? checkedItems.filter(e => e !== checkBoxPicked)
      : [...checkedItems, checkBoxPicked];
    setCheckedItems([...new Set(newCkeckedArray)]);
  };

  return (
    <>
      <h1>GeoType</h1>
      <h2>What's the Capital?</h2>
      <p>Select game difficulty</p>
      <button value="easy" onClick={handleDifficultyChange}>
        Easy(>{populationPlusPerDifficulty.EASY} people)
      </button>
      <button value="normal" onClick={handleDifficultyChange}>
        Normal(>{populationPlusPerDifficulty.NORMAL} people)
      </button>
      <button value="hard" onClick={handleDifficultyChange}>
        Hard(All countries)
      </button>
      <ContinentsSelector
        checkedItems={checkedItems}
        onChange={handleContinentChange}
      />
    </>
  );
}

export default Lobby;
