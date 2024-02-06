import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile';
import ImageUploadForm from './ImageUploadForm';
import '../css/account.css'; 
import ProfileStatus from './ProfileStatus';

function Account() {
  const [showUpdateProfile, setShowUpdateProfile] = useState(true);
  return (
    <div className='profile'>
      <div className="account-user">
          <ProfileStatus/>
      </div>
      <div className="switcher">
            <button
              onClick={() => setShowUpdateProfile(true)}
              className={showUpdateProfile ? 'active' : ''}
            >
              ფოტოები
            </button>
            <button
              onClick={() => setShowUpdateProfile(false)}
              className={!showUpdateProfile ? 'active' : ''}
            >
              ინფორმაცია
            </button>
      </div>
      {showUpdateProfile ? <ImageUploadForm /> : <UpdateProfile /> }
    </div>
  );
}

export default Account;


