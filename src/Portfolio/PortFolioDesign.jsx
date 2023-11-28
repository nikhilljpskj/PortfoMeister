// Page.jsx
import React, { useState } from 'react';
import Template1 from '../template/Template1'; // Adjust the path based on your file structure
import './PortFolioDesign.scss'; 

const PortFolioDesign = () => {
  // State for input values
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState(null);
  const [resume, setResume] = useState(null);

  const handleAddToSite = () => {

     <Template1 name={name} description={description} project={project} about={about} />

    // For now, let's pass only 'name'
    // <Template1 name={name} image={image} resume={resume} />;
  };

  return (
    <div className="page-container">
      {/* Left Section with Input Boxes */}
      <div className="left-section">
        <h2>Input Section</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <textarea type="text" placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} />
        <input type="text" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
        <button onClick={handleAddToSite}>Add to Site</button>
      </div>
      {/* Right Section displaying Template1 */}
      <div className="right-section">
        <h2>Template Preview</h2>
        <Template1 name={name} description={description} project={project} about={about}  />
      </div>
    </div>
  );
};

export default PortFolioDesign;
