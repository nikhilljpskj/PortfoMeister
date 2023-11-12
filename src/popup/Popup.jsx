import React, { useState } from 'react';
import './Popup.scss';

function Popup({ templateName, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [github, setGitHub] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // You can perform any action with the form data here, e.g., submit it to a server or handle it in your app.
    onSubmit({ name, address, github, linkedin, phone, email });

    // Close the popup
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Enter Details for {templateName}</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>GitHub Address:</label>
          <input
            type="text"
            value={github}
            onChange={(e) => setGitHub(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>LinkedIn Address:</label>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="close-popup" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
