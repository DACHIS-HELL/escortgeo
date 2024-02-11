import React from 'react';
import Header from './Header';
import '../css/contact.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaViber } from 'react-icons/fa';

const Contact = () => {
  const TELEGRAM_URL = 'https://t.me/geoEscortcomge';
  const WHATSAPP_PHONE_NUMBER = '+995577688725';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;
  const VIBER_URL = `https://msng.link/o?995577688725=vi`;
  return (
    <>
      <Header />
      <div className="contact">
        <h1>მოგვწერეთ დასახმარებლად</h1>
        <ul>
          <li>
            <FaTelegramPlane className="telegram" />
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              ტელეგრამის ჩათი
            </a>
          </li>
          <li>
            <AiOutlineWhatsApp className="whatsup" />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              ვოტსაპის ჩათი
            </a>
          </li>
          <li>
            <FaViber className="viber" />
            <a href={VIBER_URL} target="_blank" rel="noopener noreferrer">
              ვაიბერის ჩათი
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
