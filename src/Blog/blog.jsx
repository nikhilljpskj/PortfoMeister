import React from 'react';
import './blog.scss'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
const Blog = () => {
  return (
    <div>
    <Header />
    <div className="blog-container">
      
      <h1>Latest Blog Posts</h1>
      <div className="blog-post">
        <h2>Blog Post Title 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h2>Blog Post Title 2</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#">Read More</a>
      </div>
      {/* Add more blog posts as needed */}
    </div>
    </div>
  );
};

export default Blog;