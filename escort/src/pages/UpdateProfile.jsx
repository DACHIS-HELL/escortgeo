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
            placeholder='თვალების ფერი'
            type='text'
            name='eyes'
            value={formData.eyes}
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
           <select
          name='hair'
          value={formData.hair}
          onChange={handleInputChange}
        >      
         <option key="0" >თმის ფერი</option>,
         <option key="1" value="ქერა">ქერა</option>,
         <option key="2" value="ყავისფერი">ყავისფერი</option>,
         <option key="3" value="შავი">შავი</option>,
         <option key="4" value="წითელი">წითელი</option>,
         <option key="5" value="მუქი წითელი">მუქი წითელი</option>,
         <option key="6" value="ნაცრისფერი">ნაცრისფერი</option>,
         <option key="7" value="ვერცხლისფერი">ვერცხლისფერი</option>,
         <option key="8" value="ოქროსფერი">ოქროსფერი</option>,
         <option key="9" value="მოკლე">მოკლე</option>,
         <option key="10" value="საშუალო">საშუალო</option>,
         <option key="11" value="გრძელი">გრძელი</option>,
         <option key="12" value="ხვეული">ხვეული</option>,
         <option key="13" value="სწორი">სწორი</option>,
         <option key="14" value="ბუნებრივი">ბუნებრივი</option>,
         <option key="15" value="სხვა">სხვა</option>
        </select>
        <select
          name='weight'
          value={formData.weight}
          onChange={handleInputChange}
        >           
          <option key="0">წონა</option>,
          <option key="1" value="ძალიან გამხდარი">ძალიან გამხდარი</option>,
          <option key="2" value="გამხდარი">გამხდარი</option>,
          <option key="3" value="სტანდარტული">სტანდარტული</option>,
          <option key="4" value="სპორტული">სპორტული</option>,
          <option key="5" value="მსუქანი">მსუქანი</option>,
        </select>
        <select
          name='nationality'
          value={formData.nationality}
          onChange={handleInputChange}
        >  
          <option key="0">ეროვნება</option>,
          <option key="1" value="ქართველი">ქართველი</option>,
          <option key="2" value="რუსი">რუსი</option>,
          <option key="3" value="შავი">შავი</option>,
          <option key="4" value="თურქი">თურქი</option>,
          <option key="5" value="სომეხი">სომეხი</option>,
          <option key="6" value="აზერბაიჯანელი">აზერბაიჯანელი</option>,
          <option key="7" value="ყაზახი">ყაზახი</option>,
          <option key="8" value="ბერძენი">ბერძენი</option>,
          <option key="9" value="უკრაინელი">უკრაინელი</option>,
          <option key="10" value="სხვა">სხვა</option>,
        </select>
        <select
          name='location'
          value={formData.location}
          onChange={handleInputChange}
        >
           <option key="0">მდებარეობა</option>,
           <option key="1" value="თბილისი">თბილისი</option>,
           <option key="2" value="ქუთაისი">ქუთაისი</option>,
           <option key="3" value="ბათუმი">ბათუმი</option>,
           <option key="4" value="რუსთავი">რუსთავი</option>,
           <option key="5" value="ზუგდიდი">ზუგდიდი</option>,
           <option key="6" value="ქვემო ლარისი">ქვემო ლარისი</option>,
           <option key="7" value="ახმეტა">ახმეტა</option>,
           <option key="8" value="მცხეთა">მცხეთა</option>,
           <option key="9" value="ქვემო სამგორი">ქვემო სამგორი</option>,
           <option key="10" value="გორი">გორი</option>,
           <option key="11" value="ბორჯომი">ბორჯომი</option>,
           <option key="12" value="მცხეთა">მცხეთა</option>,
           <option key="13" value="მარნეული">მარნეული</option>,
           <option key="14" value="მარტვილი">მარტვილი</option>,
           <option key="15" value="ლოტერი">ლოტერი</option>,
           <option key="16" value="ფოთი">ფოთი</option>,
           <option key="17" value="წყნეთი">წყნეთი</option>,
           <option key="18" value="სიღნაღი">სიღნაღი</option>,
           <option key="19" value="ახალციხე">ახალციხე</option>,
           <option key="20" value="მცხეთა">მცხეთა</option>,

        </select>
        <select
  name='location'
  value={formData.location}
  onChange={handleInputChange}
>
  <option key="0">უბნები</option>
  <option key="1" value="ღრმაღელე">ღრმაღელე</option>
  <option key="2" value="დიდი დიღომი">დიდი დიღომი</option>
  <option key="3" value="ვარკეთილი">ვარკეთილი</option>
  <option key="4" value="ვაკე">ვაკე</option>
  <option key="5" value="წერეთელი">წერეთელი</option>
  <option key="6" value="თემქა">თემქა</option>
  <option key="7" value="საბურთალო">საბურთალო</option>
  <option key="8" value="რუსთაველი">რუსთაველი</option>
  <option key="9" value="მარჯანიშვილი">მარჯანიშვილი</option>
  <option key="10" value="ისანი">ისანი</option>
  <option key="11" value="გლდანი">გლდანი</option>
  <option key="12" value="დიღომი">დიღომი</option>
  <option key="13" value="დიდუბე">დიდუბე</option>
  <option key="14" value="ავლაბარი">ავლაბარი</option>
</select>

        <select
          name='services'
          value={formData.services}
          onChange={handleInputChange}
        >
            <option key="0">სერვისები</option>,
           <option key="1" value="მინეტი ურეზინოდ">მინეტი ურეზინოდ</option>,
           <option key="2" value="გათავება სახეზე">გათავება სახეზე</option>,
           <option key="3" value="ღრმა მინეტი">ღრმა მინეტი</option>,
           <option key="4" value="ანალური სექსი">ანალური სექსი</option>,
           <option key="5" value="პოზა 69">პოზა 69</option>,
           <option key="6" value="ეროტიული მასაჟი">ეროტიული მასაჟი</option>,
           <option key="7" value="ლესბო">ლესბო</option>,
           <option key="8" value="ფუტ ფეტიში">ფუტ ფეტიში</option>,
           <option key="9" value="კუნილინგუსი">კუნილინგუსი</option>,
           <option key="10" value="რიმინგი(ანილინგუსი)">რიმინგი(ანილინგუსი)</option>,
           <option key="11" value="მინეტი დამცავით">მინეტი დამცავით</option>,
           <option key="12" value="გათავება პირში">გათავება პირში</option>,
           <option key="13" value="გათავება სხეულზე">გათავება სხეულზე</option>,
           <option key="14" value="კოცნა">კოცნა</option>,
           <option key="15" value="კლასიკური სექსი">კლასიკური სექსი</option>,
           <option key="16" value="სტრიპ დენსი">სტრიპ დენსი</option>,
           <option key="17" value="ოქროს წვიმა">ოქროს წვიმა</option>,
           <option key="18" value="წყვილი">წყვილი</option>,
           <option key="19" value="ჯგუფური">ჯგუფური</option>,
           <option key="20" value="სექს სათამაშო">სექს სათამაშო</option>,
           <option key="21" value="დომინაცია">დომინაცია</option>,
        </select>
        <button className='butt2' type='submit'>პროფილის განახლება</button>
      </form>

    </div>
  );
}

export default UpdateProfileForm;
