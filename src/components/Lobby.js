import React, { useState } from "react";
import DifficultySelector from "./DifficultySelector";
import ContinentsSelector from "./ContinentsSelector";
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
      <ContinentsSelector
        checkedItems={checkedItems}
        onChange={handleContinentChange}
      />
      <DifficultySelector onPicked={handleDifficultyChange} />
    </>
  );
}

export default Lobby;
