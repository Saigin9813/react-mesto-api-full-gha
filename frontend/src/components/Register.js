import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassworde] = useState("");

  function handleChangeLogin(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassworde(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({ email, password });
  }
  return (
    <div className="auth">
      <h3 className="auth__title">Регистрация</h3>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__form-input"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={handleChangeLogin}
        />
        <input
          type="password"
          className="auth__form-input"
          required
          placeholder="Пароль"
          value={password}
          onChange={handleChangePassword}
        />
        <button className="auth__form-button">Зарегистрироваться</button>
      </form>
      <h4 className="auth__text">
        Уже зарегистрированы?
        <Link to="/sign-up" className="auth__link">
          Войти
        </Link>
      </h4>
    </div>
  );
}
export default Register;
