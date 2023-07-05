import React, { useState } from "react";
import axios from "axios";
import smartphoneCard from "../components/smartphonecard.jsx";

const SmartPhoneSearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      console.log(searchInput);
      const response = await axios.get(
        `http://localhost:4000/api/smartphone/${searchInput}`
      );
      setSearchResults(response.data);
      console.log(searchResults);
      //console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-[100vh] bg-amber-100 text-center">
      <h1 className="text-5xl font-bold pt-20 pb-5 text-amber-600">Smart Phone Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a smartphone or tablet name"
        className="text-lg rounded-md border m-5 bottom-2 border-amber-500 border-3 mr-3 px-5 py-2 w-1/3"
      />
      <button
        className="text-lg text-white p-2 rounded-lg bg-amber-600 w-40"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="mt-6 mx-auto">
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {searchResults.map((singleresult) => {
                if (singleresult === null) {
                  return <div>NO Results from Amazon(SERVER ERROR!)</div>;
                }
                return singleresult.map((result, index) => {

                    // name,image,price,SPEC_SCORE,Status,Ratings,fullURL
                  return (
                    <smartphoneCard
                      key={index}
                      scrapFrom={"91mobiles.com"}
                      fullURL={result?.fullURL}
                      name={result?.name}
                      image={result?.image}
                      price={result?.price}
                      SPEC_SCORE={result?.SPEC_SCORE}
                      Status={result?.Status}
                      Ratings={result?.Ratings}
                    />
                  );
                });
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartPhoneSearchPage;
