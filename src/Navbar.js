import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      color: 'white',
      marginBottom: '20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h1 style={{ margin: 0 }}>Photo Gallery</h1>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '20px'
        }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;