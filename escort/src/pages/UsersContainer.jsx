// UsersContainer.jsx
import React, { useState, useEffect } from 'react';
import '../css/user-container.css';

function UsersContainer({ filters }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`your-php-api-endpoint/fetch-data?keyword=${filters.keyword}&age=${filters.age}&hair=${filters.hair}&weight=${filters.weight}&height=${filters.height}`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [filters]); 
  return (
    <div className="users-container">
      <h1>მოდელები</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className="user-card">
              <img src={user.profilePictureUrl} alt="Profile" />
              <p>{user.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersContainer;
