import React from 'react'
import '../css/home.css';
import Logo from '../images/logo.svg'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoginForm from './LogIn';
import SearchForm from './SearchForm';

const Header = () => {

  return (
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
</div>
  )
}

export default Header