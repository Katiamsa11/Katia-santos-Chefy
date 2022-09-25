import React from "react";
import "../Header/HeaderPage.scss";
 import { NavLink, Link } from "react-router-dom";

function HeaderPage() {
  return(
  <header className="header">
  <div className="header__menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    <ul className="menu__box">
      <NavLink to="/home" className="menu__item" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className="menu__item"
        activeClassName="active-link"
      >
        Profile
      </NavLink>
      <NavLink
      to="/"
      className="menu__item"
      activeClassName="active-link"
    >
      About
    </NavLink>
    </ul>
  </div>
  <nav className="header__nav">
    <ul className="header__list">
      <li className="header__list">
        <NavLink to="/home" className="header__link" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="header__list">
        <NavLink
          to="/profile"
          className="header__link"
          activeClassName="active"
        >
          Profile
        </NavLink>
      </li>
      <li className="header__list">
        <NavLink
          to="/"
          className="header__link"
          activeClassName="active"
        >
          About
        </NavLink>
      </li>
    </ul>
  </nav>
  <Link className="header__link-logo" to="/">
    <h2 className="header__logo">chefy.</h2>
  </Link>
</header>
);
}
export default HeaderPage;
