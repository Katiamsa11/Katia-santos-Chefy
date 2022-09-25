import React from "react";
import "../Header/HeaderPage.scss";
import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/icons/house-solid.svg";
import aboutIcon from "../../assets/icons/circle-info-solid.svg";
import accountIcon from "../../assets/icons/user-solid.svg";

function HeaderPage() {
  return (
    <div className="header">
    <NavLink to="/" className="header__link header__logo-link">
        <h2 className="header__logo">chefy.</h2>
    </NavLink>
    <div className="header__container">
        <NavLink to="/" className="header__link">
            <img className="header__icon" src={homeIcon} alt="home icon" />
            <p className="header__title">home</p>
        </NavLink>
        <NavLink to="/landing" className="header__link">
            <img className="header__icon" src={aboutIcon} alt="information icon" />
            <p className="header__title">about</p>
        </NavLink>
        <NavLink to="/profile" className="header__link">
            <img className="header__icon" src={accountIcon} alt="user icon" />
            <p className="header__title">account</p>
        </NavLink>
    </div>
</div>
  );
}
export default HeaderPage;
