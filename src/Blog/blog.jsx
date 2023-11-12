import React from 'react';
import './blog.scss'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Blog() {
    return (
        <div className='blog'>
        <Header/>
 {/*  */}

        <div class="animation-container">
  <div class="lightning-container">
    <div class="lightning white"></div>
    <div class="lightning red"></div>
  </div>
  <div class="boom-container">
    <div class="shape circle big white"></div>
    <div class="shape circle white"></div>
    <div class="shape triangle big yellow"></div>
    <div class="shape disc white"></div>
    <div class="shape triangle blue"></div>
  </div>
  <div class="boom-container second">
    <div class="shape circle big white"></div>
    <div class="shape circle white"></div>
    <div class="shape disc white"></div>
    <div class="shape triangle blue"></div>
  </div>
</div>

        </div>
    );
}
export default Blog;