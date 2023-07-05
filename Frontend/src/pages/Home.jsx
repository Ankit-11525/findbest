import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function startExplore() {
    navigate("/categories");
  }
  return (
    <div className="text-center  bg-stone-300 h-screen" >
      <div className=" pt-52 border-black-2">
        <div className="text-2xl font-semibolt text-sky-900">Introducing our versatile web scraping project that specializes in extracting data from a wide range of websites, including medicine, clothing, and grocery platforms. With our advanced scraping techniques, we gather valuable information such as product details, prices, availability from these diverse industries.  Say goodbye to manual research and let our web scraping project streamline your data acquisition process efficiently and accurately.
        </div>
      <button onClick={startExplore} className="text-2xl p-5 font-semibol bg-sky-600  my-4 rounded-full text-white hover:bg-sky-900 w-1/4">
        Get Started...
      </button>
      </div>
      
    </div>
  );
};

export default Home;
