import React from "react";
import './Navbarcss.css';
const navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <div className="smallContainer">
          <h2>#FindBest</h2>
          <button>
            <a href="https://github.com" target="blank">
              <img src="github-logo.png" alt="GitHub Logo" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
