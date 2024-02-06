import React, { useState, useEffect } from 'react';
import '../css/updateprofile.css'

function UpdateProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    location: '',
    eyes: '',
    hairColor: '',
    weight: '',
    height: '',
    smoker: '',
    services: '',
    availableFor: '',
    meetingFor: '',
    orientation: '',
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('YOUR_USER_PROFILE_API_LINK');
        
        if (response.ok) {
          const userProfile = await response.json();
          setFormData(userProfile);
        } else {
          console.error('Failed to fetch user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };
    fetchUserProfile();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevPasswordData) => ({
      ...prevPasswordData,
      [name]: value,
    }));
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_UPDATE_PROFILE_API_LINK', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Profile information updated successfully!');
      } else {
        console.error('Failed to update profile information:', response.statusText);
      }
    } catch (error) {
      console.error('Error during update:', error.message);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_CHANGE_PASSWORD_API_LINK', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passwordData),
        modelName: formData.name,
        email: formData.email, 
        phone: formData.phone, 
      });

      if (response.ok) {
        console.log('Password changed successfully!');
      } else {
        console.error('Failed to change password:', response.statusText);
      }
    } catch (error) {
      console.error('Error during password change:', error.message);
    }
  };
  return (
    <div className='updateprofile'>
        <h2 className='title4'>Update Profile</h2>
      <form onSubmit={handleChangePassword} className='df2'>
        <div className='df'>
        <input
          placeholder='სახელი'
          type='text'
          name='modelName'
          value={formData.name}
          onChange={handleInputChange}
        />
      <input
          placeholder='მეილი'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          placeholder='მობილურის ნომერი'
          type='text'
          name='phone'
          value={formData.phone}
          onChange={handleInputChange}
        />
        <button className='butt2' type='submit'>პაროლის შეცვლა</button>

        </div>
        <div className='df'>
        <input
            placeholder='ძველი პაროლი'
            type='password'
            name='currentPassword'
            value={passwordData.currentPassword}
            onChange={handlePasswordInputChange}
          />
          <input
            placeholder='ახალი პაროლი'
            type='password'
            name='newPassword'
            value={passwordData.newPassword}
            onChange={handlePasswordInputChange}
          />
          <input
            placeholder='გაიმეორეთ პაროლი'
            type='password'
            name='confirmNewPassword'
            value={passwordData.confirmNewPassword}
            onChange={handlePasswordInputChange}
          />
        </div>
      </form>
      <form onSubmit={handleUpdateProfile}className='df3'>
          <input
            placeholder='სახელი'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            placeholder='მეილი'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            placeholder='ტელეფონის ნომერი'
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            placeholder='სქესი'
            type='text'
            name='gender'
            value={formData.gender}
            onChange={handleInputChange}
          />
          <input
            placeholder='ასაკი'
            type='text'
            name='age'
            value={formData.age}
            onChange={handleInputChange}
          />
          <input
            placeholder='ლოკაცია'
            type='text'
            name='location'
            value={formData.location}
            onChange={handleInputChange}
          />
          <input
            placeholder='თვალების ფერი'
            type='text'
            name='eyes'
            value={formData.eyes}
            onChange={handleInputChange}
          />
          <input
            placeholder='თმის ფერი'
            type='text'
            name='hairColor'
            value={formData.hairColor}
            onChange={handleInputChange}
          />
          <input
            placeholder='წონა'
            type='text'
            name='weight'
            value={formData.weight}
            onChange={handleInputChange}
          />
          <input
            placeholder='სიმაღლე'
            type='text'
            name='height'
            value={formData.height}
            onChange={handleInputChange}
          />
          <input
            placeholder='მწეველი'
            type='text'
            name='smoker'
            value={formData.smoker}
            onChange={handleInputChange}
          />
          <input
            placeholder='სერვისები'
            type='text'
            name='services'
            value={formData.services}
            onChange={handleInputChange}
          />
          <input
            placeholder='აქტიურია:'
            type='text'
            name='availableFor'
            value={formData.availableFor}
            onChange={handleInputChange}
          />
          <input
            placeholder='შეხვდება:'
            type='text'
            name='meetingFor'
            value={formData.meetingFor}
            onChange={handleInputChange}
          />
          <input
            placeholder='ორიენტაცია'
            type='text'
            name='orientation'
            value={formData.orientation}
            onChange={handleInputChange}
          />
        <button className='butt2' type='submit'>პროფილის განახლება</button>
      </form>

    </div>
  );
}

export default UpdateProfileForm;
