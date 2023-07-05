import React, { useState } from "react";
import axios from "axios";
import GroceryCard from "../components/GroceryCard.jsx";

const GrocerySeachPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      console.log(searchInput);
      const response = await axios.get(
        `http://localhost:4000/api/grocery/${searchInput}`
      );
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-[100vh] bg-amber-100 text-center">
      <h1 className="text-3xl py-3">Grocery Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a grocery name"
        className="text-lg rounded-md border m-5 bottom-2 border-amber-500 mr-3 p-2"
      />
      <button
        className="text-lg text-white p-2 rounded-lg bg-amber-600"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="mt-6">
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid lg:grid-cols-4 lg:gap-3 md:grid-cols-2 md:gap-3">
            {searchResults.map((singleresult) => {
              if (singleresult === null) {
                return <div>NO Results from Amazon(SERVER ERROR!)</div>;
              }
              return singleresult.map((result, index) => {
                return (
                  <GroceryCard
                    key={index}
                    groceryURL={result?.groceryURL}
                    groceryName={result?.groceryName}
                    groceryQnty={result?.groceryQnty}
                    groceryMRP={result?.groceryMRP}
                    grocerySavedPrice={result?.grocerySavedPrice}
                    groceryNewPrice={result?.groceryNewPrice}
                  />
                );
              });
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GrocerySeachPage;
