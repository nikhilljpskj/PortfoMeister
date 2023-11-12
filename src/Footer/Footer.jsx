import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer footer-bg">
      <div className="footer-row">
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><Link to="/templates">Website Templates </Link></li>
            <li><Link to="/builder">Website Builder</Link></li>
            <li><Link to="/design">Website Design</Link></li>
            <li><Link to="/features">PortfoMeister Features</Link></li>
            <li><Link to="/app-market">App Market</Link></li>
            <li><Link to="/hosting">Web Hosting</Link></li>
            <li><Link to="/domains">Domain Names</Link></li>
            <li><Link to="/accessibility">Website Accessibility</Link></li>
            <li><Link to="/app-builder">Mobile App Builder</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/online-store">Online Store</Link></li>
            <li><Link to="/online-booking">Online Booking</Link></li>
            <li><Link to="/restaurant-website">Restaurant Website</Link></li>
            <li><Link to="/blog-website">Blog Website</Link></li>
            <li><Link to="/portfolio-website">Portfolio Website</Link></li>
            <li><Link to="/wix-studio">PortfoMeister Studio</Link></li>
            <li><Link to="/enterprise-solutions">Enterprise Solutions</Link></li>
            <li><Link to="/student-website">Student Website</Link></li>
            <li><Link to="/business-email">Business Email</Link></li>
            <li><Link to="/logo-maker">Logo Maker</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Learn</h4>
          <ul>
            <li><Link to="/blog">PortfoMeister Blog</Link></li>
            <li><Link to="/privacy-security-hub">Privacy and Security Hub</Link></li>
            <li><Link to="/seo-learning-hub">SEO Learning Hub</Link></li>
            <li><Link to="/wix-encyclopedia">PortfoMeister Encyclopedia</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/hire-professional">Hire a Professional</Link></li>
            <li><Link to="/report-abuse">Report Abuse</Link></li>
            <li><Link to="/system-status">System Status</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/press-media">Press & Media</Link></li>
            <li><Link to="/investor-relations">Investor Relations</Link></li>
            <li><Link to="/wix-capital">PortfoMeister Capital</Link></li>
            <li><Link to="/accessibility-statement">Accessibility Statement</Link></li>
            <li><Link to="/patent-notice">Patent Notice</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <p>The PortfoMeister website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</p>
      <div className="footer-row">
        <p>© 2023 PortfoMeister.com, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;
