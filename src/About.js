import React from 'react';

const About = () => {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: '#333'
      }}>About Us</h1>
      
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#444' }}>Our Story</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          Welcome to our Photo Gallery! We are passionate about capturing and sharing beautiful moments through photography. 
          Our gallery showcases a diverse collection of images that tell unique stories and inspire viewers.
        </p>

        <h2 style={{ marginBottom: '20px', color: '#444' }}>Our Mission</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          Our mission is to provide a platform for photographers to showcase their work and connect with art enthusiasts. 
          We believe that every photograph has a story to tell and we're here to help share those stories with the world.
        </p>

        <h2 style={{ marginBottom: '20px', color: '#444' }}>Our Team</h2>
        <p style={{ lineHeight: '1.6' }}>
          Our team consists of passionate photographers, curators, and art enthusiasts who work together to bring you 
          the best photography experience possible. We're dedicated to promoting photography as an art form and 
          supporting both emerging and established photographers.
        </p>
      </div>
    </div>
  );
};

export default About;