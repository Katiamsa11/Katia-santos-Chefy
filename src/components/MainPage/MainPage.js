import "../MainPage/MainPage.scss";
import React from "react";
import { Link } from "react-router-dom";

function MainPage({ allChefs }) {
  return (
    <section className="main">
      <Link
        className="main__card-link"
        to={`/chefs/${allChefs.id}`}
        key={allChefs.id}
      >
        <div className="main__card-container">
          <div>
            <div className="main__chef-card">
              <img
                className="main__chef-img"
                src={allChefs.image}
                alt="chef portrait"
              />
              <div className="main__info-container">
                <div className="main__name-cuisine">
                  <h4 className="main__chef-name">{allChefs.name}</h4>
                  <p className="main__cuisines">{allChefs.cuisine}</p>
                </div>
                <p className="main__chef-rating">★{allChefs.rating}</p>
              </div>
              <p className="main__chef-bio">{allChefs.bio}</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default MainPage;
