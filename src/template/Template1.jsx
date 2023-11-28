import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes, FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import resume from '../Assets/Sreyas_Official_Resume (1).pdf';
import { Link } from 'react-router-dom';
import "./Template1.scss";

const Template1 = ({ color, click, handleClick, name, description, project, about  }) => {
   
  return (
    <div>
      <div>
      <div className={color ? 'header header-bg' : 'header'}>
      <div onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}>
            <h1>{name}</h1>
          </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: '#ffff' }} /> : <FaBars size={20} style={{ color: '#ffff' }} />}
        </div>
      </div>
      </div>

      <div id="hero" className="hero">
        <div className="content">
        <p>{description}</p>
          <h1> </h1>
        </div>
      </div>

      <div id="about" className="about">
        <div className="left">
          <h1>ABOUT</h1>
          <p>{about}</p>
          
          <a className="btn" href={resume} target="_blank" rel="noreferrer">
            My Resume
          </a>
        </div>
      </div>

      <div id="project" className="project">
        <div className="components">
          <h1>PROJECTS</h1>
          <div>
            <h1>ASTRAY</h1>
            <p>{project}</p>
            <p><a href=" ">Click Here!!! </a>to view project details</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              <div>
                <p>{name}</p>
                <p>Address1 </p>
                <p>PORTFO ADDRESS</p>
              </div>
            </div>
            <div className="phone">
              <div>
                <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                <a href="tel:#no">+91-987654123</a>
                
              </div>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                <a href="mailto:#mailid">portfomeister@gmail</a>
                
              </h4>
            </div>
          </div>

          <div className="right">
            <h4>About Me</h4>
            <p>about  </p>

            <div className="social-container">
              <a href="#portfomeister" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: '1rem' }} />
              </a>
              <a href='#portfomeister' className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '1rem' }} />
              </a>
              <a href="#portfomeister" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: '1rem' }} />
              </a>
              <a href="#portfomeister" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '1rem' }} />
              </a>
              <a href="#portfomeister" className="whatsapp social">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ marginRight: '1rem' }} />
              </a>
              <a href="#portfomeister" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '1rem' }} />
              </a>
              <a href="#portfomeister" className="telegram social">
                <FontAwesomeIcon icon={faTelegram} size="2x" style={{ marginRight: '1rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
