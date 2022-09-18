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
  const onFilterValueSelected = (filterValue) =>{
    console.log(filterValue);

  }
  return (
    <>
      <SearchInput filterValueSelected={onFilterValueSelected} />
      {allChefs.map((chef) => {
        return <MainPage key={chef.id} allChefs={chef} />;
      })}
    </>
  );
}

export default ChefsPage;
