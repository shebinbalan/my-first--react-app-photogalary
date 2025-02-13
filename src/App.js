import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import ImageGallery from './ImageGallery';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import PrivacyPolicy from "./PrivacyPolicy"; 


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
      </Routes>
      </div>
    </Router>
  );
};

export default App;
