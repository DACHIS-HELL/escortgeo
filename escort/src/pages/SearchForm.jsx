import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";



const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const performSearch = () => {
    // Check if the search query is not empty
    if (searchQuery.trim() !== '') {
      // Prepare the data to send to the PHP API
      const formData = new FormData();
      formData.append('search', searchQuery);

      // Make a fetch request to the PHP API
      fetch('search.php', {
        method: 'POST', // or 'GET' depending on your API
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          // Handle the result from the API (update the frontend)
          setSearchResults(result.message);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      // Handle the case when the search query is empty
      alert('Please enter a search query.');
    }
  };

  return (
    <div>
      <form className="form1">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={performSearch}>
        <CiSearch className='srch' />
        </button>
      </form>
      <div id="searchResults">{searchResults}</div>
    </div>
  );
};

export default SearchForm;
