import "../MainPage/MainPage.scss"
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

function MainPage() {
  const [allChefs, setAllChefs] = useState([]);
  const [isError, setIsError] = useState(false);
  const URL = "http://localhost:8080/chefs";
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setAllChefs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);
  if (!allChefs) {
    return (
      <div className="main__chef-card-skeleton">
        <div className="main__chef-img-skeleton"></div>
        <div className="main__info-container-skeleton"></div>
      </div>
    )
    }

  if (isError) {
    return<h1>....There was an unexpected Error. Refresh page!</h1>
  }

return(
  <section className="main">
    <h2 className="main__heading">Select your location to find chefs near you!</h2>
    <select name="places" id="places" className="main__select">
      <option value=""></option>
      <option value="Vancouver">Vancouver</option>
      <option value="Vancouver">Calgary</option>
      <option value="Vancouver">Toronto</option>
      <option value="Vancouver">Muskoka</option>
      <option value="Vancouver">Ottawa</option>
      <option value="Vancouver">Montreal</option>
    </select>
    <h2 className="main__featured-title">Featured Chefs</h2>
    <div className="main__card-container">

    {allChefs.map((chef)=>{
      return(
        <div key= {chef.id}>
          <div className="main__chef-card">
            <img className="main__chef-img" src={chef.image}/>
            <div className="main__info-container">
              <div className="main__name-cuisine">
                <h4 className="main__chef-name">{chef.name}</h4>
                <p className="main__cuisines">{chef.cuisine}</p>
              </div>
              <p className="main__chef-rating">★4.5</p>
            </div>
            <p className="main__chef-bio">{chef.bio}</p>
          </div>
        </div>
      )
    })}
    </div>
  </section>
)
}

export default MainPage;
