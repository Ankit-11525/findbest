import "./SearchcssPage.css"
import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      console.log(searchInput);
      const response = await axios.get(`http://localhost:5000/api/medicine/${searchInput}`);
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Container">
      <h1>Medicine Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a medicine name"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  {result.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
