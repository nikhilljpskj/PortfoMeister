
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateCollection.scss';
import Header from '../Header/Header';
import template1Image from '../Assets/temp1.jpg';
import template111Image from '../Assets/temp111.jpg';
import template2Image from '../Assets/temp2.jpg';
import template3Image from '../Assets/temp3.jpg';
import template11Image from '../Assets/temp11.jpg';
import template21Image from '../Assets/temp21.jpg';
import template31Image from '../Assets/temp31.jpg';
import template32Image from '../Assets/temp32.jpg';
import template22Image from '../Assets/temp22.jpg';
import template4Image from '../Assets/template4.jpg'
import Popup from '../popup/Popup';

function TemplateCollect() {
  const templates = [
    {
      id: 1,
      name: 'Personal Portfolio Template',
      previewImage: template1Image,
      previewImage2: template11Image,
      previewImage3: template111Image,
      details: 'Template for Personal use',
    },
    {
      id: 2,
      name: 'E-Commerce',
      previewImage: template2Image,
      previewImage2: template21Image,
      previewImage3: template22Image,
      details: 'Template for Business use',
    },
    {
      id: 3,
      name: 'Professional Portfolio Template',
      previewImage: template3Image,
      previewImage2: template31Image,
      previewImage3: template32Image,
      details: 'Template for Professional use...',
    },
    {
      id: 4,
      name: 'E-commerce Portfolio Template',
      previewImage: template4Image,
      previewImage2: template4Image,
      // previewImage3: template32Image,
      details: 'Template for Commercial use...',
    },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleUseTemplate = (template) => {
    console.log('Clicked on Use Template button with ID:', template.id);
    setSelectedTemplate(template);
    navigate('/design', { state: { selectedTemplate: template } });
  };

  const handleClosePopup = () => {
    setSelectedTemplate(null);
  };

  const handleFormSubmit = (formData) => {
    // Handle the form data (e.g., submit to a server)
    console.log('Form data submitted:', formData);
  };

  return (
    <>
      <div className="template-collect">
        <Header />
        <section className="h1-secton">
          <div className="template-heading">
            <h2>Template Collection</h2>
          </div>
        </section>
        <div className="template-list">
          {templates.map((template) => (
            <div key={template.id} className="template-item">
              <div className="template-preview">
                <img
                  src={template.previewImage}
                  alt={`Preview of ${template.name}`}
                  className="enlarge-on-hover"
                />
              </div>
              <div className="template-previewTwo">
                <img
                  src={template.previewImage3}
                  alt={`Preview of ${template.name}`}
                  className="enlarge-on-hover"
                />
              </div>
              <div className="template-previewTwo">
                <img
                  src={template.previewImage2}
                  alt={`Preview of ${template.name}`}
                  className="enlarge-on-hover"
                />
              </div>
              <div className="template-details">
                <h2>{template.name}</h2>
                <p>{template.details}</p>
                <button
                  id={`use-template-button-${template.id}`} // Unique button ID
                  className="use-template-button"
                  onClick={() => handleUseTemplate(template)}
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTemplate && (
        <Popup
          templateName={selectedTemplate.name}
          onClose={handleClosePopup}
          onSubmit={handleFormSubmit}
        />
      )}
    </>
  );
}

export default TemplateCollect;
