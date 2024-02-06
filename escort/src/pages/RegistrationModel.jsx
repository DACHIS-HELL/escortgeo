import React, { useState } from 'react';
import '../css/registration.css'
import Logo from '../images/logo.svg'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginForm from './LogIn';
import SearchForm from './SearchForm'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });

    // Validate email on input change
    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(input);
    setIsEmailValid(isValidEmail);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is valid before submitting the form
    if (!isEmailValid) {
      console.error('Invalid email. Please enter a valid email address.');
      return;
    }

    // Add your form submission logic here
    try {
      const response = await fetch('https://test99.javal.ge/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful!');
      } else {
        // Handle registration failure
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
    <div className='home'>
    <div className='logo'>
        <h4>ESCORT</h4>
        <Link to='/'>
        <img src={Logo} alt="" />
        </Link>
        </div>
        <div className='search'>
            <SearchForm/>
            <div className='user'>
                <div className="create">
                   <FaUser className='u-logo'/>
                   <Link to='/registration'>რეგისტრაცია</Link>
                </div>
                <div className="login">
                  <div className="login">
                      <LoginForm/>
                  </div>
                </div>
            </div>
        </div>
        <div className='menu'>
          <div className="routess">
              <Link to='/'>მთავარი</Link> 
              <Link to='/contact'>კონტაქტი</Link>
              <Link to='/about'>ჩვენს შესახებ</Link>
           </div>
        </div>
    <h1 className='reg'>რეგისტრაცია</h1>
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
      <label>
            <input
              placeholder='Model Name'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors && errors.name && (
              <span style={{ color: 'red' }}>{errors.name[0]}</span>
            )}
          </label>
          <label>
            <input
              placeholder='Email'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors && errors.email && (
              <span style={{ color: 'red' }}>{errors.email[0]}</span>
            )}
          </label>
          <label>
            <input
              placeholder='Phone Number'
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors && errors.phone && (
              <span style={{ color: 'red' }}>{errors.phone[0]}</span>
            )}
          </label>
          <label>
            <input 
              placeholder='Password'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors && errors.password && (
              <span style={{ color: 'red' }}>{errors.password[0]}</span>
            )}
          </label>
          <label>
            <input
              placeholder='Repeat Password'
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors && errors.confirmPassword && (
              <span style={{ color: 'red' }}>{errors.confirmPassword[0]}</span>
            )}
          </label>
          <button type="submit" className='butt2'>დარეგისტრირება</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default RegistrationForm;