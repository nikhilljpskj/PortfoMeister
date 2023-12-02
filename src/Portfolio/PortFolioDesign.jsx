
import React, { useState, useEffect } from 'react';
import Template1 from '../template/Template1';
import Template2 from '../template/Template2';
import Template3 from '../template/Template3';
import Template4 from '../template/Template4';
import './PortFolioDesign.scss'; 
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';

const PortFolioDesign = () => {
  const location = useLocation();
  const { selectedTemplate } = location.state || {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState(null);
  const [resume, setResume] = useState(null);
  const [address, setAddress] = useState(null);
  const [facebooklink, setFaceBookLink] = useState(null);
  const [instagramlink, setInstagramLink] = useState(null);
  const [twitterlink, setTwitterLink] = useState(null);
  const [githublink, setGitHubLink] = useState(null);
  const [linkedinlink, setLinkedInLink] = useState(null);


  useEffect(() => {
    // Update state values based on the selected template
    if (selectedTemplate) {
      setName(selectedTemplate.name);
      
    }
  }, [selectedTemplate]);


  useEffect(() => {
    // Update state values based on the selected template
    if (selectedTemplate) {
      setName(selectedTemplate.name);
      setEmail(selectedTemplate.email);
      setDescription(selectedTemplate.description);
      setProject(selectedTemplate.project);
      setAbout(selectedTemplate.about);
      setImage(selectedTemplate.image);
      setPhone(selectedTemplate.phone);
      setResume(selectedTemplate.resume);
      setAddress(selectedTemplate.address);
      setFaceBookLink(selectedTemplate.facebooklink);
      setInstagramLink(selectedTemplate.instagramlink);
      setTwitterLink(selectedTemplate.twitterlink);
      setGitHubLink(selectedTemplate.githublink);
      setLinkedInLink(selectedTemplate.linkedinlink);
      // Update other states accordingly
    }
  }, [selectedTemplate]);



  return (
    <div>
      <Header />
      <div className="page-container">
        {/* Left Section with Input Boxes */}
        <div className="left-section">
          <h2 style={{ color: '#ffff', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', fontWeight: 'bold' }}>Input Section</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <textarea type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <textarea type="text" placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} />
          <input type="text" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />

          {/* Social Links */}
          <div className="social-links">
            <h4>Social Links</h4>
            <div className="social-input">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <input type="text" placeholder="Facebook" value={facebooklink} onChange={(e) => setFaceBookLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <input type="text" placeholder="Instagram" value={instagramlink} onChange={(e) => setInstagramLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <input type="text" placeholder="Twitter" value={twitterlink} onChange={(e) => setTwitterLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <input type="text" placeholder="GitHub" value={githublink} onChange={(e) => setGitHubLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <input type="text" placeholder="LinkedIn" value={linkedinlink} onChange={(e) => setLinkedInLink(e.target.value )} />
            </div>
            
            {/* Repeat similar structure for other social links */}
          </div>

          <button >Add to Site</button>
        </div>
        {/* Right Section displaying Template1 */}
        <div className="right-section">
          <h2>Template Preview</h2>
          {selectedTemplate && (
            <>
              {selectedTemplate.id === 1 && (
                <Template1 name={name} email={email} project={project} description={description} linkedinlink={linkedinlink} githublink={githublink} address={address} about={about} phone={phone} image={image} resume={resume} facebooklink={facebooklink} twitterlink={twitterlink} instagramlink={instagramlink} />
              )}
              {selectedTemplate.id === 2 && (
                <Template3 name={name} email={email} project={project} description={description} linkedinlink={linkedinlink} githublink={githublink} address={address} about={about} phone={phone} image={image} resume={resume} facebooklink={facebooklink} twitterlink={twitterlink} instagramlink={instagramlink} />
              )}
              {selectedTemplate.id === 3 && (
                <Template2 name={name} email={email} project={project} description={description} linkedinlink={linkedinlink} githublink={githublink} address={address} about={about} phone={phone} image={image} resume={resume} facebooklink={facebooklink} twitterlink={twitterlink} instagramlink={instagramlink} />
              )}
              {selectedTemplate.id === 4 && (
                <Template4 name={name} email={email} project={project} description={description} linkedinlink={linkedinlink} githublink={githublink} address={address} about={about} phone={phone} image={image} resume={resume} facebooklink={facebooklink} twitterlink={twitterlink} instagramlink={instagramlink} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortFolioDesign;
