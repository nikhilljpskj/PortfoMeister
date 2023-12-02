import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes, FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Template4.scss';
import prodimg from '../Assets/hero-image.png'


const Template4 = ({
  color,
  click,
  handleClick,
  name,
  description,
  project,
  about,
  address,
  phone,
  email,
  facebooklink,
  instagramlink,
  twitterlink,
  githublink,
  linkedinlink,
}) => {
  return (

      <div className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="hero-btn">
            <button className="secondary-btn">Shop Now </button>
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
