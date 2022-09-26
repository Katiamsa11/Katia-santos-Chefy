import React from "react";
import "../Header/HeaderPage.scss";
import { NavLink, Link } from "react-router-dom";
import homeIcon from "../../assets/icons/house-solid.svg";
import aboutIcon from "../../assets/icons/circle-info-solid.svg";
import accountIcon from "../../assets/icons/user-solid.svg";

function HeaderPage() {
  return (
    <div className="header">
      <Link to="/" className="header__link header__logo-link">
        <h2 className="header__logo">chefy.</h2>
      </Link>
      <nav className="header__container" id="main">
        <NavLink to="/home" className="header__link">
          <img className="header__icon" src={homeIcon} alt="home icon" />
          <li className="header__title">home</li>
        </NavLink>
        <NavLink end to="/" className="header__link">
          <img
            className="header__icon"
            src={aboutIcon}
            alt="information icon"
          />
          <li className="header__title">about</li>
        </NavLink>
        <NavLink to="/profile" className="header__link dropdown ">
          <img
            className="header__icon dropbtn"
            src={accountIcon}
            alt="user icon"
          />
          <li className="header__title">account </li>
          <div class="dropdown-content">
            <p>Hello User</p>
            <p>Log Out</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
}
export default HeaderPage;
