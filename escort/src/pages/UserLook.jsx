import React from 'react';
import '../css/userlook.css';
import Header from './Header';

function UserLook({ user }) {
  return (
    <>
    <Header/>
    <div className="seeprofile">
      <img src={user.profilePictureUrl} alt="Profile" />
      <div className="userInfo">
        <h3>{user.name}</h3>
        <p>მეილი: {user.email}</p>
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
        <h4>Gallery</h4>
        <ul className="gallery">
          {user.gallery.map(image => (
            <li key={image.id}>
              <img src={image.url} alt={`Image ${image.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>

    </>
  );
}

export default UserLook;
