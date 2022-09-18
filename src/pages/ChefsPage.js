import React from "react";
import { fetchChefs, TabTitle } from "../utils/Utils";
import { useState, useEffect } from "react";
import MainPage from "../components/MainPage/MainPage";
import SearchInput from "../components/SearchInput/SearchInput";

function ChefsPage() {
  //function to change tab title dinamically
  TabTitle("Chefs Home Page");

  const [allChefs, setAllChefs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [filterChefs, setFilterChefs] = useState("all");

  useEffect(() => {
    fetchChefs()
      .then((response) => {
        setAllChefs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  if (!allChefs) {
    return <h2>Loading Chefs....</h2>;
  }

  if (isError) {
    return <h1>....There was an unexpected Error. Refresh page!</h1>;
  }

  const filterLocations = allChefs.filter((location) => {
    if (filterChefs === "Vancouver") {
      return location.location === "Vancouver";
    } else if (filterChefs === "Calgary") {
      return location.location === "Calgary";
    } else if (filterChefs === "Toronto") {
      return location.location === "Toronto";
    } else if (filterChefs === "Muskoka") {
      return location.location === "Muskoka";
    } else if (filterChefs === "Ottawa") {
      return location.location === "Ottawa";
    } else if (filterChefs === "Montreal") {
      return location.location === "Montreal";
    } else {
      // const nineChefs = allChefs.slice(0, 9);
      // return nineChefs;
      return allChefs;
    }
  });

  const onFilterValueSelected = (filterValue) => {
    setFilterChefs(filterValue);
    console.log("this is it " + filterValue);
  };
  return (
    <>
      <SearchInput filterValueSelected={onFilterValueSelected} />
      {filterLocations.map((chef) => {
        return <MainPage key={chef.id} allChefs={chef} />;
      })}
    </>
  );
}

export default ChefsPage;
