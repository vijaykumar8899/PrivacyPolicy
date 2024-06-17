import React from 'react';
import '../Components/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        Welcome to our app! This Privacy Policy explains how we collect, use, and protect your personal information when you use our app.
      </p>
      <h2>Data Collection and Usage</h2>
      <p>
        We collect the following types of data:
        <ul>
          <li>Personal information (e.g., name, phone number, email address)</li>
        </ul>
        We use this data for app functionality, analytics, and personalized content.
      </p>
      <h2>Transmitted Data</h2>
      <p>
        All the data that stores in the server are the features provided by the app. No data of user is used for any personal use. We ensure the security of transmitted data.
      </p>
      <h2>Permissions</h2>
      <p>
        Our app requests the following permissions:
        <ul>
          <li>Camera access (for photo-related features)</li>
          <li>Location access (for location-based services)</li>
          <li>Storage access (for saving app data)</li>
          <li>Bluetooth access (for printing  receipt)</li>

        </ul>
        We only use these permissions as described in the app.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our privacy practices, please contact us at thvfuturistai@gmail.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
