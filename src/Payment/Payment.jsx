import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  // You can customize this page based on your requirements

  return (
    <div>
      <h2>Payment Status</h2>
      <p>Thank you for making the payment!</p>
      
      <Link to="/">Go back to Portfolio</Link>
    </div>
  );
};

export default Payment;
