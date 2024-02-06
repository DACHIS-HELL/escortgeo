// ProfilePictureUpload.jsx

import React, { useState } from 'react';
import ProfileSummary from './Summary';
import { Link } from 'react-router-dom';


const ProfilePictureUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfilePicture = async (imageUrl) => {
    try {
      // Make an API request to update the profile picture on the server using the native fetch API
      const response = await fetch('your-api-endpoint/update-profile-picture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: imageUrl,
        }),
      });

      if (response.ok) {
        console.log('Profile picture updated successfully');
      } else {
        console.error('Error updating profile picture:', response.status);
      }
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };

  const handleUpdateClick = () => {
    if (selectedImage) {
      updateProfilePicture(selectedImage);
      setSelectedImage(null);
    }
  };

  return (
    <div className='profile-main'>
      <div>
      <div className='proImg'>
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </div>
      <div className='change2'>
        <label class="custom-file-upload">
            Upload Photo
            <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button onClick={handleUpdateClick}>Update</button>
      </div>
      </div>
      <div className="vip">
         <ProfileSummary/>
         <div className="buyvip">
            <Link className='buyer' to='/buyvip'>Buy Vip</Link>
         </div>
      </div>
    </div>
  );
};

export default ProfilePictureUpload;

