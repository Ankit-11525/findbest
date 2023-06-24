import React from "react";
import './Navbarcss.css';
const navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <div className="smallContainer">
          <h3>#FindBest</h3>
          <button>
            <a href="https://github.com" target="blank">
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
