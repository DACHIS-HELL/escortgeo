import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='left-logo'>
            <Link to='/'>
                  <img src={Logo} alt="" />
            </Link>
        </div>
        <div className='right-cont'>
            <div className="links">
            <Link to='/'>მთავარი</Link> 
            <Link to='/contact'>კონტაქტი</Link>
            <Link to='/about'>ჩვენს შესახებ</Link>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed assumenda mollitia dolore! Quidem 
                nesciunt quos repudiandae commodi, deserunt ipsam magni.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sed assumenda mollitia dolore! Quidem 
                nesciunt quos repudiandae commodi, deserunt ipsam magni.

            </p>
        </div>
    </div>
  )
}

export default Footer