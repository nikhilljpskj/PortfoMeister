import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Template2.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Template2 = ({ name, description, project, about, image,facebooklink, instagramlink, twitterlink, githublink, linkedinlink, email, project1title, project1description, project1url, project2title, project2description, project2url  }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // const workInfoData = [
  //   { 

  //     // image: "PickMeals",
  //     head: 'Project 1',
  //     title: project1title,
  //     text:  project1description,
  //   },
  //   {
  //     // image: "DeliveryMeals",
  //     head: 'Project 2',
  //     title: project2title,
  //     text:  project1description,
  //   },
  // ];

  return (
    <div className={`template2-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <div className="header-content">
          {/* <a href="#home"> */}
            <h1>{name}</h1>
          {/* </a> */}
          <div className="header-details">
            {/* <p>{description}</p> */}
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <>
                  <FontAwesomeIcon icon={faSun} />
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faMoon} />
                </>
              )}
            </button>
          </div>
        </div>
        <nav>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
          </div>
        </nav>
      </header>
      <section id="home" className="home-section">
        <div className="column left">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="column right">
          <img src={image && URL.createObjectURL(image)} />
        </div>
      </section>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>{about}</p>
        {/* <a className="btn" href={resume} target="_blank" rel="noreferrer">
            My Resume
          </a> */}
      </section>
      <section id="project" className="project-section">
        <h2>Projects</h2>
        <div className="work-section-bottom">
          
            <div className="work-section-info" >
              {/* <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div> */}
              <h4>Project 1</h4>
              <h2>{project1title}</h2>
              <h3>{project1description}</h3>
              <p>{project1url}</p>
            </div>
          
        </div>
        <div className="work-section-bottom">
          
            <div className="work-section-info" >
              {/* <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div> */}
              <h4>Project 2</h4>
              <h2>{project2title}</h2>
              <h3>{project2description}</h3>
              <p>{project2url}</p>
            </div>
          
        </div>
      </section>
      <footer>
      <p style={{ color: 'white', marginLeft: '0px' }}>{email}</p>
        <p style={{ color: 'white', marginLeft: '340px' }}>&copy; Portfomeister</p>
          <div className="right">
            <div className="social-container">
              <Link to={facebooklink} className="facebook social" style={{ color: '#1640D6', marginLeft: '90px' }}>
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={instagramlink} className="instagram social" style={{ color: '#BE3144', marginLeft: '5px' }}>
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={twitterlink} className="twitter social" style={{ color: '#1DA1F2', marginLeft: '5px' }}>
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={githublink} className="github social" style={{ color: 'black', marginLeft: '5px' }}>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
              <Link to={linkedinlink} className="linkedin social" style={{ color: '#0077b5', marginLeft: '5px' }}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '1rem' }} />
              </Link>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Template2;
