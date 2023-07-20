import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthFunctionContext from "../contexts/AuthFunctionContext";

export default function Authentication() {
  const { setUser, setUserInfo } = useContext(AuthFunctionContext);
  const regexName = /^$|^[a-z]+$/;

  // useState definition
  const [name, setName] = useState("");
  const [warningName, setWarningName] = useState(false);
  const [password, setPassword] = useState("");
  //   const [passwordShown, setPasswordShown] = useState(false);
  const [failAuth, setFailAuth] = useState(false);

  const navigate = useNavigate();

  // submit handler for the form
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const dataFromForm = Object.fromEntries(formData.entries());
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/admins/login`, dataFromForm)
      .then((response) => {
        if (response.data.token) {
          setUser(response.data.token);
          setUserInfo(response.data.user);
          navigate("/espaceadmin");
        } else {
          console.info(response);
        }
      })
      .catch((error) => {
        console.error(error.message);
        setFailAuth(true);
      });
  };

  // handler for change in input admin name
  const handleNameChange = (event) => {
    if (regexName.test(event.target.value)) {
      setName(event.target.value);
      setWarningName(false);
    } else {
      setWarningName(true);
    }
  };

  // handler for change in password input
  const handlePasswordChange = (event) => setPassword(event.target.value);

  // toggle to change type input for password to show it if user click on the SHOW button
  //   const togglePassword = () => {
  //     setPasswordShown(!passwordShown);
  //   };

  return (
    <>
      <form onSubmit={handleSubmit} className="connection">
        <div className="connection-input">
          <label className="admin-practician-label" htmlFor="name">
            ID
          </label>
          <input
            name="name"
            className="input-username-white"
            type="text"
            autoComplete="name"
            value={name}
            onChange={handleNameChange}
          />
          {warningName && (
            <p className="warning-name">L'ID doit être en minuscule</p>
          )}
        </div>
        <div className="password-input">
          <label className="admin-practician-label" htmlFor="password">
            Mot de passe
          </label>
          <div className="password-input-and-show">
            <input
              name="password"
              className="input-pw"
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {/* <button
              onClick={togglePassword}
              type="button"
              className="hide-or-show-button"
            >
              <i
                className={
                  passwordShown ? "fi fi-rr-eye-crossed" : "fi fi-rr-eye"
                }
                alt="button to show or hide password"
              />
            </button> */}
          </div>
        </div>
        <button type="submit" className="connection-button">
          SE CONNECTER
        </button>
      </form>
      {failAuth && (
        <div>
          <button
            className="bg-fail-auth-modal"
            type="button"
            onClick={() => setFailAuth(false)}
            label="close fail authentication modal"
          />
          <div className="fail-auth-modal">
            <button
              className="exit-modal-fail-button"
              type="button"
              onClick={() => setFailAuth(false)}
            >
              <i className="fi fi-rr-cross-small" />
            </button>
            <p>Les champs renseignés ne correspondent pas.</p>
            <p>Veuillez réessayer.</p>
          </div>
        </div>
      )}
    </>
  );
}
