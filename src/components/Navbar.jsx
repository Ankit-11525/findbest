import React from "react";

const navbar = () => {
  return (
    <div>
      <div className="flex h-14 items-center flex-row justify-between px-2 bg-slate-800">
        <h2 className="font-bold text-white text-xl">#FindBest</h2>
        <button>
          <a href="https://github.com" target="blank">
            <img className="h-8" src="github-logo.png" alt="GitHub Logo" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default navbar;
