// import React from 'react';
// import './TemplateCollection.scss';
// import Header from '../Header/Header';
// import template1Image from '../Assets/temp1.jpg';
// import template2Image from '../Assets/temp2.jpg';
// import template3Image from '../Assets/temp3.jpg';
// import template11Image from '../Assets/temp11.jpg';
// import template21Image from '../Assets/temp21.jpg';
// import template31Image from '../Assets/temp31.jpg';


// function TemplateCollect() {
//   const templates = [
//     {
//       id: 1,
//       name: 'Template 1',
//       previewImage: template1Image,
//       previewImage2: template11Image,
//       details: 'Template details Lorem ipsum...',
//     },
//     {
//       id: 2,
//       name: 'Template 2',
//       previewImage: template2Image,
//       previewImage2: template21Image,
//       details: 'Template details Lorem ipsum...',
//     },
//     {
//       id: 3,
//       name: 'Template 3',
//       previewImage: template3Image,
//       previewImage2: template31Image,
//       details: 'Template details Lorem ipsum...',
//     },
//     {
//       id: 4,
//       name: 'Template 4',
//       previewImage: template3Image,
//       previewImage2: template31Image,
//       details: 'Template details Lorem ipsum...',
//     },
//     {
//       id: 5,
//       name: 'Template 5',
//       previewImage: template1Image,
//       previewImage2: template21Image,
//       details: 'Template details Lorem ipsum...',
//     },
//   ];

//   return (
//     <>
    
//     {/* <h1>hell</h1> */}
//     <div className="template-collect">
//       <Header />
//       <section className='h1-secton'>
//         <div class="template-heading">
//           <h2>Template Collection</h2>
//         </div>
//       </section>
//       <div className="template-list">
//         {templates.map((template) => (
//           <div key={template.id} className="template-item">
//             <div className="template-preview">
//               <img
//                 src={template.previewImage}
//                 alt={`Preview of ${template.name}`}
//                 className="enlarge-on-hover"
//               />
//             </div>
// {/*  */}
//             <div className="template-previewTwo">
//               <img
//                 src={template.previewImage2}
//                 alt={`Preview of ${template.name}`}
//                 className="enlarge-on-hover"
//               />
//             </div>
// {/*  */}

//             <div className="template-details">
//               <h2>{template.name}</h2>
//               <p>{template.details}</p>
//               <button className="use-template-button">Use Template</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
    
//   );
// }


// export default TemplateCollect;

////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateCollection.scss';
import Header from '../Header/Header';
import template1Image from '../Assets/temp1.jpg';
import template2Image from '../Assets/temp2.jpg';
import template3Image from '../Assets/temp3.jpg';
import template11Image from '../Assets/temp11.jpg';
import template21Image from '../Assets/temp21.jpg';
import template31Image from '../Assets/temp31.jpg';
import Popup from '../popup/Popup'; // Ensure the correct import path for Popup

function TemplateCollect() {
  const templates = [
    {
      id: 1,
      name: 'Template 1',
      previewImage: template1Image,
      previewImage2: template11Image,
      details: 'Template for Personal use...',
    },
    {
      id: 2,
      name: 'Template 2',
      previewImage: template2Image,
      previewImage2: template21Image,
      details: 'Template for Business use...',
    },
    {
      id: 3,
      name: 'Template 3',
      previewImage: template3Image,
      previewImage2: template31Image,
      details: 'Template for Professional use...',
    },
    // Add more templates as needed
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleUseTemplate = (template) => {
    setSelectedTemplate(template);
    navigate('/portfo');
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
          <div class="template-heading">
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
                  src={template.previewImage2}
                  alt={`Preview of ${template.name}`}
                  className="enlarge-on-hover"
                />
              </div>
              <div className="template-details">
                <h2>{template.name}</h2>
                <p>{template.details}</p>
                <button
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
