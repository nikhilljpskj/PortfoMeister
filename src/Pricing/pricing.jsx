import React from 'react';
import './pricing.scss'
// import './TemplateCollection.scss'; 
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
import Payment from '../Assets/payment.png';

function Pricing() {
    return (
    <div>
        <Header />
        <div className="pricing">
           
        <h1>Pricing Plans</h1>
        <div className="plans">
          {/* Plan 1 */}
          <div className="plan">
            <h2>Basic Plan</h2>
            <p>Perfect for individuals</p>
            <div className="price">$9.99/month</div>
            <button>Get Started</button>
          </div>
  
          {/* Plan 2 */}
          <div className="plan">
            <h2>Pro Plan</h2>
            <p>Great for small businesses</p>
            <div className="price">$19.99/month</div>
            <button>Get Started</button>
          </div>
  
          {/* Plan 3 */}
          <div className="plan">
            <h2>Premium Plan</h2>
            <p>For larger enterprises</p>
            <div className="price">$29.99/month</div>
            <button>Get Started</button>
          </div>
          
        </div>
        <div className="comparison-table">
  <h2>Plan Features</h2>
  <table>
    <thead>
      <tr>
        <th>Features</th>
        <th>Basic</th>
        <th>Pro</th>
        <th>Premium</th>
      </tr>
    </thead>
    <tbody>
      <tr className="custom-domain">
        <td>Custom domain</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="free-domain">
        <td>Free domain for 1 year</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="remove-branding">
        <td>Remove branding</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="storage-space">
        <td>Storage space</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="customer-accounts">
        <td>Customer accounts</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="customized-website">
        <td>Customized website</td>
        <td>&#10008;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="professional-logo">
        <td>Professional logo</td>
        <td>&#10008;</td>
        <td>&#10008;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="social-media-files">
        <td>Social media logo files</td>
        <td>&#10008;</td>
        <td>&#10008;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="customer-care">
        <td>Customer care</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
        <td>&#10003;</td>
      </tr>
      <tr className="priority-customer-care">
        <td>Priority customer care</td>
        <td>&#10008;</td>
        <td>&#10008;</td>
        <td>&#10003;</td>
      </tr>
      {/* Add more rows for each feature */}
    </tbody>
  </table>
</div>

<div className="payment-methods">
  <h2>Accepted Payment Methods</h2>
  <p>We accept the following payment methods:</p>
  <div className="payment-image-container">
  <img src={Payment} alt="Accepted Payment Methods" />
  </div>
</div>
        {/* Brief Regarding Premium Plans */}
        <div className="premium-plans">
          <h2>Premium Plans</h2>
          <p>
            Our premium plans come with additional benefits, including priority
            customer support, advanced analytics, and more. Upgrade to premium
            for an enhanced experience.
          </p>
        </div>
      </div>
      </div>
    );
}
export default Pricing;