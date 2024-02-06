// VipModelsContainer.jsx
import React, { useState, useEffect } from 'react';
import '../css/vip-container.css';

function VipModelsContainer({ filters }) {
  const [vipModels, setVipModels] = useState([]);

  useEffect(() => {
    // Fetch VIP models from your PHP API endpoint with a single filter for both users and VIP models
    fetch(`your-php-api-endpoint/fetch-data?keyword=${filters.keyword}&age=${filters.age}&hair=${filters.hair}&weight=${filters.weight}&height=${filters.height}`)
      .then(response => response.json())
      .then(data => {
        setVipModels(data);
      })
      .catch(error => {
        console.error('Error fetching VIP models data:', error);
      });
  }, [filters]); // Re-fetch when filters change

  return (
    <div className="vip-container">
      <h1 >VIP მოდელები</h1>
      <ul>
        {vipModels.map(model => (
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

export default VipModelsContainer;
