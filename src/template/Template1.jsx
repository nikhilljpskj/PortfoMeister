import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes, FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resume from '../Assets/Sreyas_Official_Resume (1).pdf';
import { Link } from 'react-router-dom';
import "./Template1.scss";
import { Phone } from '@material-ui/icons';

const Template1 = ({ color, click, handleClick, name, description, project, about, address, phone, email, facebooklink, instagramlink, twitterlink, githublink, linkedinlink  }) => {
   
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
      </div>
      </div>

      <div id="hero" className="hero">
        <div className="content">
        <h3 style={{ color: '#ffff', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', fontWeight: 'bold' }}> Hey there I'm </h3>
        <h1>{name}</h1>
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
            <h2>{project}</h2>
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
                <p>{address}</p>
              </div>
            </div>
            <div className="phone">
              <div>
                <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                <a href="tel:#no">{phone}</a>
                
              </div>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                <a href="mailto:#mailid">{email}</a>
                
              </h4>
            </div>
          </div>

          <div className="right">
            <h4>Connect With me on</h4>

            <div className="social-container">
              <Link to={facebooklink} className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={instagramlink} className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={twitterlink} className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={githublink} className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={linkedinlink} className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
