import React from 'react';
import './TemplatePreview.scss';

const TemplatePreview = ({
  name,
  email,
  phone,
  portfolioLink,
  skills,
  experience,
  education,
  githubLink,
  linkedinLink,
  image,
  pdf,
}) => {
  return (
    <div className="template-preview-container">
      <h2>Portfolio Preview</h2>
      <div className="preview-content">
        <div className="personal-info">
          <h3>Personal Information</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Portfolio Link:</strong> {portfolioLink}
          </p>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <p>{skills}</p>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <p>{experience}</p>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <p>{education}</p>
        </div>

        <div className="social-links">
          <h3>Social Links</h3>
          <p>
            <strong>GitHub:</strong> {githubLink}
          </p>
          <p>
            <strong>LinkedIn:</strong> {linkedinLink}
          </p>
        </div>
      </div>

      <div className="image-section">
        <h3>Image</h3>
        {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
      </div>

      <div className="pdf-section">
        <h3>Resume PDF</h3>
        {pdf && (
          <embed
            src={URL.createObjectURL(pdf)}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        )}
      </div>
    </div>
  );
};

export default TemplatePreview;
