import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes, FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Template4.scss';
import prodimg from '../Assets/hero-image.png'


const Template4 = ({temp4heading, temp4description,temp4url
}) => {
  return (

      <div className="hero container">
        <div className="hero-content">
          <h1>{temp4heading}</h1>
          <p style={{ fontSize: '36px' }}>
            {temp4description}
          </p>

        <div className="hero-btn">
          <a href={temp4url}
            className="secondary-btn"
            style={{ textDecoration: 'none' }} // Remove underline
            target="_blank"
            rel="noopener noreferrer"
            >
            <button
              style={{
                padding: '10px 20px', // Adjust padding for the desired size
                fontSize: '16px', // Adjust font size for the desired size
                      }}>Shop Now
              </button>
            </a>
        </div>



          <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
              <FontAwesomeIcon icon={faAmazon} size="2x" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={prodimg} alt="hero-image" />
        </div>
    </div>
  );
};

export default Template4;
