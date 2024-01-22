import React from "react";
import { useState } from "react";

function Login(props) {
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
    props.onLogin({ email, password });
  }

  return (
    <div className="auth">
      <h3 className="auth__title">Вход</h3>
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
        <button className="auth__form-button auth__form-button_sign-up">
          Войти
        </button>
      </form>
    </div>
  );
}
export default Login;
