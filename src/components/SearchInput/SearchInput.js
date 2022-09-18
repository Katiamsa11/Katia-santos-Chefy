import React from "react";
import "../SearchInput/SearchInput.scss";
// import { useState, useEffect } from "react";

function SearchInput({ filterValueSelected }) {
  const onFilterValueChanged = (event) => {
    console.log(event.target.value);
    filterValueSelected(event.target.value);
  };

  return (
    <div className="main">
      <h2 className="main__heading">
        Select your location to find chefs near you!
      </h2>
      <select
        name="places"
        id="places"
        className="main__select"
        onChange={onFilterValueChanged}
      >
        <option value=""></option>
        <option value="Vancouver">Vancouver</option>
        <option value="Calgary">Calgary</option>
        <option value="Toronto">Toronto</option>
        <option value="Muskoka">Muskoka</option>
        <option value="Ottawa">Ottawa</option>
        <option value="Montreal">Montreal</option>
      </select>
      <h2 className="main__featured-title">Featured Chefs</h2>
    </div>
  );
}

export default SearchInput;
