import React from "react";
import "../Header/HeaderPage.scss";
import { NavLink, Link } from "react-router-dom";
import homeIcon from "../../assets/icons/house-solid.svg";
import chefIcon from "../../assets/icons/chef-hat.png";
import accountIcon from "../../assets/icons/user-solid.svg";
import logout from "../../assets/icons/logout.svg";

function HeaderPage() {
  return (
    <div className="header">
      <Link to="/" className="header__logo-link">
        <h2 className="header__logo">chefy.</h2>
      </Link>
      <nav className="header__container" id="main">
        <NavLink end to="/" className="header__link">
          <img className="header__icon" src={homeIcon} alt="home icon" />
          <p className="header__title">home</p>
        </NavLink>
        <NavLink to="/get-started" className="header__link">
          <img
            className="header__icon"
            src={chefIcon}
            alt="information icon"
          />
          <p className="header__title">get started</p>
        </NavLink>
        <NavLink to="/profile" className="header__link">
          <img className="header__icon" src={accountIcon} alt="user icon" />
          <p className="header__title">my profile</p>
        </NavLink>
        <div className="header__link">
          <img className="header__icon" src={logout} alt="user icon" />
          <p className="header__title">log out</p>
        </div>
      </nav>
    </div>
  );
}
export default HeaderPage;
