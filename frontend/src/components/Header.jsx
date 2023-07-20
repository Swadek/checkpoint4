import React from "react";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-presentation">
        <h1>
          <a href="/">Antoine JULIAN</a>
        </h1>
        <h2>Junior Developer at Leo Lagrange</h2>
        <p>
          Recently graduated from training, I am working on crafting CRM and
          other software solutions
        </p>
      </div>
      <ul>
        <li>
          <a href="https://github.com/Swadek">
            <i className="fi fi-brands-github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/antoine-julian/">
            <i className="fi fi-brands-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
