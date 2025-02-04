import React from "react";
import "./PrivacyPolicy.css"; // Import CSS for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: February 2025</p>
      
      <h2>1. Introduction</h2>
      <p>
        Welcome to our website. We value your privacy and are committed to
        protecting your personal data. This privacy policy explains how we
        collect, use, and share information about you.
      </p>
      
      <h2>2. Information We Collect</h2>
      <ul>
        <li>Personal identification information (Name, email, phone number, etc.)</li>
        <li>Usage data and analytics</li>
        <li>Cookies and tracking technologies</li>
      </ul>
      
      <h2>3. How We Use Your Information</h2>
      <p>
        We use the collected data to provide, maintain, and improve our services.
        This includes communication, customer support, and personalization.
      </p>
      
      <h2>4. Data Security</h2>
      <p>
        We take appropriate security measures to protect your data from unauthorized
        access, alteration, or disclosure.
      </p>
      
      <h2>5. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
        <br /> <strong>Email:</strong> support@example.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;