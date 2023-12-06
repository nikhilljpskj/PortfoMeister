import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./blog.scss";

const Blog = () => {
  return (
    <div>
      <Header></Header>
    <div className="blog-container">
      <div className="blog-header">
        <div className="blog-cover">
          <div className="blog-author">
            <h3>Sreyas S</h3>
          </div>
        </div>
      </div>

      <div className="blog-body">
        <div className="blog-title">
          <h1>How to build a website</h1>
        </div>
        <div className="blog-summary">
          <p>No matter what type of site you want to make, your website should represent you or your business in the best
        light possible. This is often easier said than done; it’s not uncommon to get burn out when building a website
        from scratch or using a website maker.</p><br/>
        <p>Fortunately, this guide will show you how to build a website from scratch while maintaining your sanity. Keep
        reading for expert tips on getting started, or check out our website launch checklist for additional steps on
        getting your site publish-ready.</p>
        </div>
        <div className="blog-tags">
        </div>
      </div>

      <div className="blog-footer">
        <ul>
          <li className="published-date">2 days ago</li>
          
        </ul>
      </div>
    </div>
    <div className="blog-container">
      <div className="blog-header">
        <div className="blog-cover">
          <div className="blog-author">
            <h3>Sreyas S</h3>
          </div>
        </div>
      </div>

      <div className="blog-body">
        <div className="blog-title">
          <h1><a href="#">How to Make a Website from Scratch</a></h1>
        </div>
        <div className="blog-summary">
        <h3>Decide What Type of Website You Want to Make</h3>
          <p>
            Any website you create begins with a clear website goal and target audience. By identifying your niche and
            purpose, you can take steps towards building a site that not only looks pretty but performs as you hope that
            it will.
          </p>
          <br/>
          <p>
            Everything from your site layout to content should ladder up to your intended impact. For example, a
            portfolio website will naturally look different from an online store. A portfolio will include pages
            showcasing your work and a prominent “Contact Me” form—whereas an online store will have product pages,
            payment pages, and maybe even print-on-demand integrations that are intended to monetize your website.
          </p>
          <br/>
          <p>Depending on your goals, there are various elements that you may want to consider adding to your site:</p>
          <br/>
          <h3>Choose Your Website Builder</h3>
          <br/>
          <p>A website builder is a popular and affordable solution that enables you to design, personalize, publish and manage a website without having to use code.  The best platforms help you get a site launched quicker and without fuss—while also offering 24/7 support and built-in features that make scaling easier. </p>
          <p>With the right website builder, you won’t have to deal with the mountains of minutia that other DIY site owners may face (e.g., installing security features by hand, fixing bugs on your own, etc.). Low-code-no-code software takes care of web development for you, so you don't need to know how to code to customize your site. That said, while there are several solid players in this website-building industry, you’ll want to make sure that you do your due diligence before investing in one. Making the wrong choice could leave you with serious regrets down the road. </p>
          <br/>   
          <h3>Pick Your Template</h3>   
          <br/>   
          <p>The visual layout of your website is its most important element. You’ll want to take your time exploring your options before settling on the visual imagery and design. To get started, take a look at this database of professional website templates to see which one fits your vision best. 


Whether you’re looking for portfolio templates, model portfolio examples or templates for an online store, there are dozens of customizable options to choose from. These range from simple website templates to more complex ones.  


As you plan out your site, note what your competitor sites look like and check out other visual platforms, like Pinterest and Instagram. All of these examples will provide insight into what fonts, colors and web design styles and trends your audience gravitates towards. However, avoid copying what’s already been done. Rather, gain an understanding of the visual language you want to pursue and check that it resonates with your intended audience.

</p>  
          </div>
        <div className="blog-tags">
        </div>
      </div>

      <div className="blog-footer">
        <ul>
          <li className="published-date">2 days ago</li>
          
        </ul>
      </div>
    </div>

    </div>

  
  );
};

export default Blog;