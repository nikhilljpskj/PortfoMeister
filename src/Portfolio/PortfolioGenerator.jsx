import React, { useState } from 'react';
import './PortfolioGenerator.scss';
import Header from '../Header/Header';
import TemplatePreview from '../TemplatePreview/TemplatePreview.jsx'; // Make sure to adjust the path based on your project structure

const PortfolioGenerator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    setPdf(file);
  };

  const renderTemplate = () => {
    return (
      <div className="template-container">
        <TemplatePreview
          name={name}
          email={email}
          phone={phone}
          portfolioLink={portfolioLink}
          skills={skills}
          experience={experience}
          education={education}
          githubLink={githubLink}
          linkedinLink={linkedinLink}
          image={image}
          pdf={pdf}
        />
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="portfolio-generator-container">
        <div className="form-container">
          <h2>Portfolio Information</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="portfolioLink">Portfolio Link:</label>
            <input
              type="text"
              id="portfolioLink"
              value={portfolioLink}
              onChange={(e) => setPortfolioLink(e.target.value)}
            />

            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />

            <label htmlFor="experience">Experience:</label>
            <textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <label htmlFor="education">Education:</label>
            <textarea
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />

            <label htmlFor="githubLink">GitHub Link:</label>
            <input
              type="text"
              id="githubLink"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            />

            <label htmlFor="linkedinLink">LinkedIn Link:</label>
            <input
              type="text"
              id="linkedinLink"
              value={linkedinLink}
              onChange={(e) => setLinkedinLink(e.target.value)}
            />

            <label htmlFor="image">Upload Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
            />

            <label htmlFor="pdf">Upload Resume:</label>
            <input
              type="file"
              id="pdf"
              accept=".pdf"
              onChange={handlePdfUpload}
            />
          </form>
        </div>

        <div className="template-container">{renderTemplate()}</div>
      </div>
    </div>
  );
};

export default PortfolioGenerator;
