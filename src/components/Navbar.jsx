import React from "react";

const navbar = () => {
  return (
    <div>
      <div className="flex h-16 items-center flex-row justify-between px-32 bg-sky-900">
        <h2 className="font-bold text-white text-2xl">#FindBest</h2>
        <button>
          <a href="https://github.com" target="blank">
            <img className="h-10" src="github-logo.png" alt="GitHub Logo" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default navbar;
