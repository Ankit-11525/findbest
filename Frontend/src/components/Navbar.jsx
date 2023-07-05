import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <div className="flex h-16 items-center flex-row justify-between px-32 bg-sky-900">
        <Link
          className="font-bold text-white text-2xl"
          to={{
            pathname: `/`,
          }}
        >
          <h2>#FindBest</h2>
        </Link>

        <button>
          <a href="https://github.com/Ankit-11525/findbest" target="blank">
            <img className="h-10" src="github-logo.png" alt="GitHub Logo" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default navbar;
