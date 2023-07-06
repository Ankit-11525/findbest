import React, { useState } from "react";
import axios from "axios";
import MedicineCard from "../components/MedicineCard.jsx";
import {API} from "../backend.js"

const MedicalSeachPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      console.log(searchInput);
      console.log(API);
      const response = await axios.get(
        `${API}/api/medicine/${searchInput}`
      );
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-[100vh] bg-green-100 text-center">
      <h1 className="text-5xl font-bold pt-20 pb-5 text-sky-900">Medicine Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a medicine name"
        className="text-lg rounded-md border m-5 bottom-2 border-sky-900 border-3 mr-3 px-5 py-2 w-1/3"
      />
      <button
        className="text-lg text-white p-2 rounded-lg bg-sky-900 w-40"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="mt-6 mx-auto">
        {searchResults.length === 1 ? (
          <p>No results found.</p>
        ) : (
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {searchResults.map((singleresult) => {
                if (singleresult === null) {
                  return <div>NO Results from Amazon(SERVER ERROR!)</div>;
                }
                return singleresult.map((result, index) => {
                  return (
                    <MedicineCard
                      key={index}
                      medicineIMG={result?.medicineIMG}
                      scrapFrom={result?.scrapFrom}
                      medicineURL={result?.medicineURL}
                      medicineName={result?.medicineName}
                      medicineQnty={result?.medicineQnty}
                      medicineMRP={result?.medicineMRP}
                      medicineSavedPrice={result?.medicineSavedPrice}
                      medicineNewPrice={result?.medicineNewPrice}
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

export default MedicalSeachPage;
