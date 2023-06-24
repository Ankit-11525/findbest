import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import "./Homecss.css";
const Home = () => {
  const navigate = useNavigate();

  function startExplore() {
    navigate("/areas");
  }
  return (
    <div className="HomeContainer">
      <div className="getstart">
        <Button onClick={startExplore} text="Get Started..." />
      </div>
    </div>
  );
};

export default Home;
