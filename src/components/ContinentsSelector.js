import React from "react";
import "../styles.css";
import Checkbox from "./Checkbox";

function ContinentsSelector({ checkedItems, onChange }) {
  const checkboxes = [
    {
      name: "Africa",
      key: "AfricaCheckBox",
      label: "Africa"
    },
    {
      name: "Americas",
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

  return (
    <div>
      <p>What continents do you want to play?</p>
      {checkboxes.map(item => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            checked={checkedItems.includes(item.name)}
            onChange={onChange}
          />
        </label>
      ))}
      <p>(Don't check anything for all continents)</p>
    </div>
  );
}

export default ContinentsSelector;
