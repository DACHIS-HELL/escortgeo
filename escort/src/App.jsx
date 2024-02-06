// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegistrationForm from './pages/RegistrationModel';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Vip from './pages/Vip';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buyvip" element={<Vip/>} />
          <Route path="/account/*" element={<Account />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


