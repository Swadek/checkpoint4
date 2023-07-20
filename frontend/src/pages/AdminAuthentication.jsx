import React from "react";
import Authentication from "../components/Authentication";
import "../styles/AdminAuthentication.scss";

function AdminAuthentication() {
  return (
    <div className="background">
      <div className="authentication-admin-container">
        <h1 className="title-connection-admin">
          <p>Connectez vous à</p>
          <p>votre compte administrateur</p>
        </h1>
        <div className="auth-admin">
          <Authentication />
        </div>
      </div>
    </div>
  );
}

export default AdminAuthentication;
