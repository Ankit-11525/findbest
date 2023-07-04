import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function startExplore() {
    navigate("/categories");
  }
  return (
    <div className="text-center bg-amber-600">
      <button onClick={startExplore} className=" text-xl p-5 font-semibold bg-white my-64 rounded-2xl text-black hover:bg-slate-400">
        Get Started...
      </button>
    </div>
  );
};

export default Home;
