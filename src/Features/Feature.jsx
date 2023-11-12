import React from "react";
import "./Features.scss";
import Header from "../Header/Header";

function Features() {
  return (
    <div>
      
      <div className="features">
        <section className="feature-section">
          <h2>Key Features</h2>
          <p>Explore the powerful features of our platform.</p>
          <ul>
            <li>Responsive Design</li>
            <li>Customizable Templates</li>
            <li>Portfolio Preview</li>
            <li>File Upload Support</li>
            <li>Rich Text Editing</li>
            <li>Image and PDF Storage</li>
            <li>Template Selection</li>
            <li>Dynamic Content Update</li>
            {/* Add more features */}
          </ul>
        </section>

        <section className="highlighted-feature">
          <h2>Featured Functionality</h2>
          <p>Discover the standout functionalities.</p>
          <div className="feature-card">
            <h3>Portfolio Generation</h3>
            <p>
              Easily create and preview your professional portfolio with our
              intuitive portfolio generator.
            </p>
            <button>Learn More</button>
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default Features;
