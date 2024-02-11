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
            გთხოვთ, ყურადღებით წაიკითხოთ წესები და პირობები ამ ვებსაიტის გამოყენებამდე. ამ პირობებზე დათანხმება ნიშნავს, რომ თქვენ წაიკითხეთ და ეთანხმებით ქვემოთ ჩამოთვლილ წესებს.
            </p>
        </div>
    </div>
  )
}

export default Footer