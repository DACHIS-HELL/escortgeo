import React, { useState, useEffect } from 'react';
import '../css/imageupload.css';
import '../css/userlook.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('your-updated-api-endpoint/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className="seeprofile">
              <img src={user.profilePictureUrl} alt="Image" />
              <div className="userInfo">
                <h3>{user.name}</h3>
                <p>მეილი: {user.email}</p>
                <p>მობილურის ნომერი: {user.phone}</p>
                <p>სქესი: {user.gender}</p>
                <p>ასაკი: {user.age}</p>
                <p>ლოკაცია: {user.location}</p>
                <p>თვალების ფერი: {user.eyes}</p>
                <p>თმის ფერი: {user.hairColor}</p>
                <p>წონა: {user.weight}</p>
                <p>სიმაღლე: {user.height}</p>
                <p>მწეველი: {user.smoker}</p>
                <p>სერვისები: {user.services}</p>
                <p>აქტიურია: {user.availableFor}</p>
                <p>შეხვდება: {user.meetingFor}</p>
                <p>ორიენტაცია: {user.orientation}</p>
                <p>სტატუსი: {user.summary}</p>
              </div>
            </div>
            <ul>
              <h4>Gallery</h4>
              {user.gallery.map(image => (
                <div className="responsive" key={image.id}>
                  <div className="gallery">
                    <li key={image.id}>
                      <img src={image.url} alt={`Image ${image.id}`} />
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;