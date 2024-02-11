import React, { useState, useEffect } from 'react';
import '../css/vip-container.css';


function TopModelsContainer({ filters }) {
  const [topModels, setTopModels] = useState([]);

  useEffect(() => {
    fetch(`your-php-api-endpoint/fetch-data?keyword=${filters.keyword}&age=${filters.age}&hair=${filters.hair}&weight=${filters.weight}&height=${filters.height}`)
      .then(response => response.json())
      .then(data => {
        setTopModels(data);
      })
      .catch(error => {
        console.error('Error fetching top models data:', error);
      });
  }, [filters]); 

  return (
    <div className="vip-container">
      <h1>Top მოდელები</h1>
      <ul>
        {topModels.map(model => (
          <li key={model.id}>
            <div className="model-card">
              <img src={model.profilePictureUrl} alt="Profile" />
              <p>{model.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopModelsContainer;
