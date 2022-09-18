import React from "react";
import "../SearchInput/SearchInput.scss";


function SearchInput({ filterValueSelected }) {
  const onFilterValueChanged = (event) => {
    filterValueSelected(event.target.value);
  };

  return (
    <div className="search">
      <h1 className="search__heading">
        Select your location to find chefs near you!
      </h1>
      <select
        name="places"
        id="places"
        className="search__select"
        onChange={onFilterValueChanged}
      >
        <option className="search__option" value="">
          Location
        </option>
        <option className="search__option" value="Vancouver">
          Vancouver
        </option>
        <option className="search__option" value="Calgary">
          Calgary
        </option>
        <option className="search__option" value="Toronto">
          Toronto
        </option>
        <option className="search__option" value="Muskoka">
          Muskoka
        </option>
        <option className="search__option" value="Ottawa">
          Ottawa
        </option>
        <option className="search__option" value="Montreal">
          Montreal
        </option>
      </select>
    </div>
  );
}

export default SearchInput;
