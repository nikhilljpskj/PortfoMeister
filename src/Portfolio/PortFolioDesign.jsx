

import React, { useState, useEffect } from 'react';
import Template1 from "../template/src/Template1";

import Template2 from '../template/Template2';
import Template3 from '../template/Template3';
import Template4 from '../template/Template4';
import './PortFolioDesign.scss';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';


const loadScript = (src)=>{
  return new Promise((resolve) => {
    const script =document.createElement('script');
    script.src = src

    script.onload = () =>{
      resolve(true)
    };

    script.onerror = () =>{
      resolve(true)
    };

    document.body.appendChild(script)
  });

};

const displayRazorpay= async (amount)=>{
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

  if(!res){
    alert('You are offline, Failed to load Razorpay');
    return;
  }

  const options = {
    key: "rzp_test_79aimvjGGIKYEa",
    // key: "rzp_test_QshKjoFtlmmRpF",
    currency: "INR",
    amount: amount * 100,
    name: "Portfomeister",

    handler : function (response){
      alert(response.razorpay_paymemt_id);
      alert("payment is successful");
    },
    prefill:{
      name:"portfomeister"
    }
    // if(response.razorpay_paymemt_id)if need any backend
  };
  const paymenntObject = new window.Razorpay(options)
  paymenntObject.open()
}

const PortFolioDesign = () => {
  const location = useLocation();
  const { selectedTemplate } = location.state || {};
  const [template4price, setTemplate4Price] = useState(100);
  const [template1price, setTemplate1Price] = useState(400);
  const [template2price, setTemplate2Price] = useState(150);
  const [template3price, setTemplate3Price] = useState(800);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');
  const [project1title, setProject1Title] = useState('');
  const [project1description, setProject1Description] = useState('');
  const [project1url, setProject1URL] = useState('');
  const [project2title, setProject2Title] = useState('');
  const [project2description, setProject2Description] = useState('');
  const [project2url, setProject2URL] = useState('');


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

  // State variables for the Third section
  const [temp2name, setTemp2Name] = useState('');
  const [temp2maindescription, setTemp2MainDescription] = useState('');
  const [temp2mainsummary, setTemp2MainSummary] = useState('');
  const [temp2contactlink, setTemp2ContactLink] = useState('');
  const [temp2aboutheader, setTemp2AboutHeader] = useState('');
  const [temp2aboutdescription, setTemp2AboutDescription] = useState('');
  const [temp2facebooklink, setTemp2FaceBookLink] = useState('');
  const [temp2instagramlink, setTemp2InstagramLink] = useState('');
  const [temp2linkedinlink, setTemp2LinkedInLink] = useState('');
  const [temp2twitterlink, setTemp2TwitterLink] = useState('');
  const [temp2whatweofferhead, setTemp2WhatWeOfferHead] = useState('');
  const [temp2whatweofferdescription, setTemp2WhatWeOfferDescription] = useState(['']);
  const [temp2highlightscontent1, setTemp2HighLightsContent1] = useState('');
  const [temp2highlightscontent2, setTemp2HighLightsContent2] = useState('');
  const [temp2highlightsheading1, setTemp2HighLightsHeading1] = useState('');
  const [temp2highlightsheading2, setTemp2HighLightsHeading2] = useState('');
  


  // State variables for the Fourth section
  const [temp4heading, setTemp4Heading] = useState('');
  const [temp4description, setTemp4Description] = useState('');
  const [image1, setTemp4Image] = useState('');
  const [temp4url, setTemp4URL] = useState('');

  // State variable to determine whether to show the first section or not
  const [showFirstSection, setShowFirstSection] = useState(true);

  

  useEffect(() => {
    if (selectedTemplate) {
      setName(selectedTemplate.name);
    }
  }, [selectedTemplate]);

  useEffect(() => {
    if (selectedTemplate) {
      setName(selectedTemplate.name);
      setEmail(selectedTemplate.email);
      setDescription(selectedTemplate.description);
      setProject(selectedTemplate.project);
      setProject1Title(selectedTemplate.project1title);
      setProject1Description(selectedTemplate.project1description);
      setProject1URL(selectedTemplate.project1url);
      setProject2Title(selectedTemplate.project2title);
      setProject2Description(selectedTemplate.project2description);
      setProject2URL(selectedTemplate.project2url);
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

      //updates Template4 specific fields
      setTemp4Heading(selectedTemplate.temp4heading);
      setTemp4Description(selectedTemplate.temp4description);
      setTemp4Image(selectedTemplate.temp4image);
      setTemp4URL(selectedTemplate.temp4url);

      // Update Template2 specific fields
      setTemp2Name(selectedTemplate.temp2name);
      setTemp2MainDescription(selectedTemplate.temp2maindescription);
      setTemp2MainSummary(selectedTemplate.temp2mainsummary);
      setTemp2ContactLink(selectedTemplate.temp2contactlink);
      setTemp2AboutHeader(selectedTemplate.temp2aboutheader);
      setTemp2AboutDescription(selectedTemplate.temp2aboutdescription);
      setTemp2FaceBookLink(selectedTemplate.temp2facebooklink);
      setTemp2InstagramLink(selectedTemplate.temp2instagramlink);
      setTemp2TwitterLink(selectedTemplate.temp2twitterlink);
      setTemp2LinkedInLink(selectedTemplate.temp2linkedinlink);
      setTemp2WhatWeOfferHead(selectedTemplate.temp2whatweofferhead)
      setTemp2AboutDescription(selectedTemplate.temp2whatweofferdescription)
      setTemp2HighLightsContent1(selectedTemplate.temp2highlightscontent1)
      setTemp2HighLightsContent2(selectedTemplate.temp2highlightscontent2)
      setTemp2HighLightsHeading1(selectedTemplate.temp2highlightsheading1)
      setTemp2HighLightsHeading2(selectedTemplate.temp2highlightsheading2)
    }
  }, [selectedTemplate]);

  useEffect(() => {
  
    setShowFirstSection(selectedTemplate?.id !== 2 && selectedTemplate?.id !== 4);
  }, [selectedTemplate]);

  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="left-section">
          {showFirstSection && (
            <div>
              <h2 style={{ color: '#ffff', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', fontWeight: 'bold' }}>Input Section</h2>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <input type="text" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} />
              <textarea type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <h5>Project 1</h5>
              <input type="text" placeholder="Project 1 Title" value={project1title} onChange={(e) => setProject1Title(e.target.value)} />
              <textarea type="text" placeholder="Project 1 Description" value={project1description} onChange={(e) => setProject1Description(e.target.value)} />
              <input type="text" placeholder="Project 1 URL" value={project1url} onChange={(e) => setProject1URL(e.target.value)} />
              <h5>Project 2</h5>
              <input type="text" placeholder="Project 2 Title" value={project2title} onChange={(e) => setProject2Title(e.target.value)} />
              <textarea type="text" placeholder="Project 2 Description" value={project2description} onChange={(e) => setProject2Description(e.target.value)} />
              <input type="text" placeholder="Project 2 URL" value={project2url} onChange={(e) => setProject2URL(e.target.value)} />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
              <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
              <div className="social-links">
                <h4>Social Links</h4>
                <div className="social-input">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <input type="text" placeholder="Facebook" value={facebooklink} onChange={(e) => setFaceBookLink(e.target.value)} />
                </div>
                <div className="social-input">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <input type="text" placeholder="Instagram" value={instagramlink} onChange={(e) => setInstagramLink(e.target.value)} />
                </div>
                <div className="social-input">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <input type="text" placeholder="Twitter" value={twitterlink} onChange={(e) => setTwitterLink(e.target.value)} />
                </div>
                <div className="social-input">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <input type="text" placeholder="GitHub" value={githublink} onChange={(e) => setGitHubLink(e.target.value)} />
                </div>
                <div className="social-input">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <input type="text" placeholder="LinkedIn" value={linkedinlink} onChange={(e) => setLinkedInLink(e.target.value)} />
                </div>
              </div>
              <button onClick={() => displayRazorpay(template1price)}>Get Temp 1</button>
            </div>
          )}

          {/* Second Section */}
          {selectedTemplate && selectedTemplate.id === 2 && (
            <div className="second-section">
              <h2>E-Commerce</h2>
              <input type="text" placeholder="Name" value={temp2name} onChange={(e) => setTemp2Name(e.target.value)} />
              <input type="text" placeholder="Main Description" value={temp2maindescription} onChange={(e) => setTemp2MainDescription(e.target.value)} />
              <input type="text" placeholder="Main Summary" value={temp2mainsummary} onChange={(e) => setTemp2MainSummary(e.target.value)} />
              <input type="text" placeholder="Contact link" value={temp2contactlink} onChange={(e) => setTemp2ContactLink(e.target.value)} />
              <input type="text" placeholder="About Header" value={temp2aboutheader} onChange={(e) => setTemp2AboutHeader(e.target.value)} />
              <input type="text" placeholder="About Description" value={temp2aboutdescription} onChange={(e) => setTemp2AboutDescription(e.target.value)} />
              <input type="text" placeholder="What we offer Header" value={temp2whatweofferhead} onChange={(e) => setTemp2WhatWeOfferHead(e.target.value)} />
              <input type="text" placeholder="What we offer Description" value={temp2whatweofferdescription} onChange={(e) => setTemp2WhatWeOfferDescription(e.target.value)} />
              <input type="text" placeholder="Highlights heading 1" value={temp2highlightsheading1} onChange={(e) => setTemp2HighLightsHeading1(e.target.value)} />
              <input type="text" placeholder="Highlights content 1" value={temp2highlightscontent1} onChange={(e) => setTemp2HighLightsContent1(e.target.value)} />
              <input type="text" placeholder="Highlights heading 2" value={temp2highlightsheading2} onChange={(e) => setTemp2HighLightsHeading2(e.target.value)} />
              <input type="text" placeholder="Highlights content 1" value={temp2highlightscontent2} onChange={(e) => setTemp2HighLightsContent2(e.target.value)} />
              <div className="social-links">
                <h4>Social Links</h4>
                <div className="social-input">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <input type="text" placeholder="Facebook" value={temp2facebooklink} onChange={(e) => setTemp2FaceBookLink(e.target.value)} />
                </div>
                <div className="social-input">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <input type="text" placeholder="Instagram" value={temp2instagramlink} onChange={(e) => setTemp2InstagramLink(e.target.value)} />
                </div>
                <div className="social-input">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <input type="text" placeholder="Twitter" value={temp2twitterlink} onChange={(e) => setTemp2TwitterLink(e.target.value)} />
                </div>
                <div className="social-input">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <input type="text" placeholder="LinkedIn" value={temp2linkedinlink} onChange={(e) => setTemp2LinkedInLink(e.target.value)} />
                </div>
                <button onClick={() => displayRazorpay(template2price)}>Get Temp 2</button>
              </div>

            </div>
          )}

          {/* Third Section */}
          {selectedTemplate && selectedTemplate.id === 3 && (
  <div>
    {/* Temp 3 content */}
    <button onClick={() => displayRazorpay(template3price)}>Temp 3</button>
  </div>
)}


          {/* Fourth Section */}
          {selectedTemplate && selectedTemplate.id === 4 && (
            <div className="fourth-section">
              <h2>E-commerce Portfolio Template</h2>
              <input type="text" placeholder="Heading" value={temp4heading} onChange={(e) => setTemp4Heading(e.target.value)} />
              <input type="text" placeholder="Description" value={temp4description} onChange={(e) => setTemp4Description(e.target.value)} />
              <input type="file" accept="image/*" onChange={(e) => setTemp4Image(e.target.files[0])} />
              <input type="text" placeholder="Product URL" value={temp4url} onChange={(e) => setTemp4URL(e.target.value)} />
              <button onClick={() => displayRazorpay(template4price)}>Get Temp 4</button>
            </div>
            
          )}

          {/* <button>Get it</button> */}
        </div>

        <div className="right-section">
          <h2>Template Preview</h2>
          {selectedTemplate && (
            <>
              {selectedTemplate.id === 1 && (
                <Template1
                  name={name}
                  email={email}
                  project={project}
                  project1description={project1description}
                  project1title={project1title}
                  project1url={project1url}
                  project2description={project2description}
                  project2title={project2title}
                  project2url={project2url}
                  description={description}
                  linkedinlink={linkedinlink}
                  githublink={githublink}
                  address={address}
                  about={about}
                  phone={phone}
                  image={image}
                  resume={resume}
                  facebooklink={facebooklink}
                  twitterlink={twitterlink}
                  instagramlink={instagramlink}
                />
              )}
              {selectedTemplate.id === 2 && (
                <Template3
                  temp2name={temp2name}
                  temp2maindescription={temp2maindescription}
                  temp2mainsummary={temp2mainsummary}
                  temp2contactlink={temp2contactlink}
                  temp2aboutdescription={temp2aboutdescription}
                  temp2aboutheader={temp2aboutheader}
                  temp2facebooklink={temp2facebooklink}
                  temp2twitterlink={temp2twitterlink}
                  temp2instagramlink={temp2instagramlink}
                  temp2linkedinlink={temp2linkedinlink}
                  project1description={project1description}
                  project1title={project1title}
                  project1url={project1url}
                  project2description={project2description}
                  project2title={project2title}
                  project2url={project2url}
                  temp2whatweofferhead={temp2whatweofferhead}
                  temp2whatweofferdescription={temp2whatweofferdescription}
                  temp2highlightscontent1={temp2highlightscontent1}
                  temp2highlightscontent2={temp2highlightscontent2}
                  temp2highlightsheading1={temp2highlightsheading1}
                  temp2highlightsheading2={temp2highlightsheading2}

                  name={name}
                  email={email}
                  project={project}
                  description={description}
                  linkedinlink={linkedinlink}
                  githublink={githublink}
                  address={address}
                  about={about}
                  phone={phone}
                  image={image}
                  resume={resume}
                  facebooklink={facebooklink}
                  twitterlink={twitterlink}
                  instagramlink={instagramlink}
                />
              )}
              {selectedTemplate.id === 3 && (
                <Template2
                  name={name}
                  temp2maindescription={temp2maindescription}
                  temp2mainsummary={temp2mainsummary}
                  temp2contactlink={temp2contactlink}
                  temp2aboutdescription={temp2aboutdescription}
                  temp2aboutheader={temp2aboutheader}
                  temp2facebooklink={temp2facebooklink}
                  email={email}
                  project={project}
                  description={description}
                  linkedinlink={linkedinlink}
                  githublink={githublink}
                  address={address}
                  about={about}
                  phone={phone}
                  image={image}
                  resume={resume}
                  facebooklink={facebooklink}
                  twitterlink={twitterlink}
                  instagramlink={instagramlink}

                  project1description={project1description}
                  project1title={project1title}
                  project1url={project1url}
                  project2description={project2description}
                  project2title={project2title}
                  project2url={project2url}
                />
              )}
              {selectedTemplate.id === 4 && (
                <Template4
                  temp4heading={temp4heading}
                  temp4description={temp4description}
                  temp4url={temp4url}
                  description={description}
                  linkedinlink={linkedinlink}
                  githublink={githublink}
                  address={address}
                  about={about}
                  phone={phone}
                  image={image}
                  resume={resume}
                  facebooklink={facebooklink}
                  twitterlink={twitterlink}
                  instagramlink={instagramlink}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortFolioDesign;
