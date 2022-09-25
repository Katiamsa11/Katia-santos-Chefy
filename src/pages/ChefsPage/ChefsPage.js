import React from "react";
import { fetchChefs, TabTitle } from "../../utils/Utils";
import { useState, useEffect } from "react";
import MainPage from "../../components/MainPage/MainPage";
import SearchInput from "../../components/SearchInput/SearchInput";
import LoadingPage from "../../components/Loading/Loading"
import "../ChefsPage/ChefsPage.scss";

function ChefsPage() {
  //function to change tab title dinamically
  TabTitle("Home");

  const [allChefs, setAllChefs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [filterChefs, setFilterChefs] = useState("all");
  //Set state to change the title dinamically depending on the location
  const [title, setTitle] = useState("Feautured");

  useEffect(() => {
    fetchChefs()
      .then((response) => {
        setAllChefs(response.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  if (!allChefs) {
    return <LoadingPage />;
  }

  if (isError) {
    return <h1>....There was an unexpected Error. Refresh page!</h1>;
  }
  //filter chefs by the location the user choices
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
      return allChefs;
    }
  });

  const onFilterValueSelected = (filterValue) => {
    setFilterChefs(filterValue);
    setTitle(filterValue);
  };

  return (
    <>
      <SearchInput filterValueSelected={onFilterValueSelected} />
      <h2 className="chefs__title">{`${title} Chefs`}</h2>
      <div className="chefs__card-container">
        {filterLocations.map((chef) => {
          return <MainPage key={chef.id} allChefs={chef} />;
        })}
      </div>
    </>
  );
}

export default ChefsPage;
