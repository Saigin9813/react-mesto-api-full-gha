import headerLogo from "./../images/logo.svg";

import React from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";

function Header(props) {
  const { loggedIn, email, logOut } = props;
  const location = useLocation();
  const linkText = location.pathname === "/sign-up" ? "Регистрация" : "Войти";
  const buttonText = loggedIn ? "Выйти" : linkText;

  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Логотип" />
      <div className="header__info">
        {loggedIn && <p className="header__email">{email}</p>}
        <Routes>
          <Route
            path="/react-mesto-auth"
            element={
              <Link
                to="/sign-in"
                className="header__link header__button-logout"
              >
                Войти
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link
                to="/sign-in"
                className="header__link header__button-logout"
              >
                Войти
              </Link>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link
                to="/sign-up"
                className="header__link header__button-logout"
              >
                Регистрация
              </Link>
            }
          />
        </Routes>
        {loggedIn && (
          <button
            className="header__link header__button-logout"
            onClick={logOut}
          >
            {buttonText}
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
