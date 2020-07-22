import React, { useState } from "react";
import "../styles.css";
import Checkbox from "./Checkbox";

function ContinentsSelector() {
  const [checkedItems, setCheckedItems] = useState({});
  const checkboxes = [
    {
      name: "Africa",
      key: "AfricaCheckBox",
      label: "Africa"
    },
    {
      name: "America",
      key: "AmericaCheckBox",
      label: "America"
    },
    {
      name: "Asia",
      key: "AsiaCheckBox",
      label: "Asia"
    },
    {
      name: "Europe",
      key: "EuropeCheckBox",
      label: "Europe"
    }
  ];

  function handleChange(event) {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  }

  return (
    <div>
      <p>What continents do you want to play?</p>
      {checkboxes.map(item => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
        </label>
      ))}
      <p>Don't check anything for the real deal(all continents)</p>
    </div>
  );
}

export default ContinentsSelector;
