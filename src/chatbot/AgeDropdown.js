import React from "react";
import "./AgeDropdown.css";

const ageOptions = [];
ageOptions.push(
  <option key="select" value="">
    Select
  </option>
);

const AgeDropdown = (props) => {
  for (let age = 18; age <= 40; age++) {
    ageOptions.push(
      <option key={Math.random()} value={age}>
        {age}
      </option>
    );
  }
  const handleAgeChange = (e) => {
    const selectedValue = e.target.value;
    const ageValue = parseInt(selectedValue);
    if (!isNaN(ageValue)) {
        props.actions.afterAgeSelection(ageValue);
      console.log(ageValue);
    }
  };

  return (
    <div>
      <select className="selectAge" onChange={handleAgeChange}>
        {ageOptions}
      </select>
    </div>
  );
};

export default AgeDropdown;
