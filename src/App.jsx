import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './Home/HomePage';
import './App.css';
import Login from './login/Login';
import Register from './register/Register';
import TemplateCollect from './template/TemplateCollection';
import Features from './Features/Feature';
import Pricing from './Pricing/pricing';
import Blog from './Blog/blog';
import Contactus from './ContactUs/contactus';
import PortfolioGenerator from './Portfolio/PortfolioGenerator';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/templates" element={<TemplateCollect />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path='/portfo' element={<PortfolioGenerator />}/>


      </Routes>
    </Router>
  );
}

export default App;
