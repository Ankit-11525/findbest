import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function startExplore() {
    navigate("/categories");
  }
  return (
    <div className="text-center bg-stone-300 h-screen" >
      <button onClick={startExplore} className="text-2xl p-5 font-semibol bg-sky-600  my-64 rounded-full text-white hover:bg-sky-900 w-1/4">
        Get Started...
      </button>
    </div>
  );
};

export default Home;
