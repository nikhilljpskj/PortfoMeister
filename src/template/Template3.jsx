import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import PickMeals from "../Assets/pick-meals-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { FiArrowRight } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/Logo.svg";
import './Template3.scss';
import { Link } from 'react-router-dom';

// const Template3 = () => {
  const Template3 = ({ temp2facebooklink, temp2instagramlink, temp2linkedinlink, temp2twitterlink, temp2name, temp2maindescription, temp2mainsummary, temp2contactlink, temp2aboutdescription, color, click, handleClick,temp2aboutheader, name, description, project, about, address, phone, email, facebooklink, instagramlink, twitterlink, githublink, linkedinlink, temp2whatweofferdescription, temp2whatweofferhead, temp2highlightsheading1, temp2highlightsheading2, temp2highlightscontent1, temp2highlightscontent2  }) => {

  const workInfoData = [
    {
      image: PickMeals,
      title: temp2highlightsheading1,
      text: temp2highlightscontent1
         },
    {
      image: DeliveryMeals,
      title: temp2highlightsheading2,
      text:  temp2highlightscontent2,
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    
    <div className="combined-container">
      <nav>
        <div className="nav-logo-container" style={{ color: 'orange', fontFamily: 'Your Chosen Font', fontSize: '2rem', margin: 0 }}>
          <h1>{temp2name}</h1>
        </div>
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="">Contact</a>
          <a href="#work">Work</a>
          <button className="primary-button">Call And Book Now</button>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
      <section id="home" className="home-section">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            {temp2maindescription}
            {/* Your Favourite Food Delivered Hot & Fresh */}
          </h1>
          <p className="primary-text">
            {temp2mainsummary}
            {/* Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food. */}
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-section-container">
          <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
          </div>
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
          </div>
          <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
              {temp2aboutheader}
              {/* Food Is An Important Part Of A Balanced Diet */}
            </h1>
            <p className="primary-text">
              {temp2aboutdescription}
              {/* Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla quam. */}
            </p>
            <p className="primary-text">
              {/* Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
              facilisis at fringilla quam. */}
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">What we offer</p>
          <h1 className="primary-heading">{temp2whatweofferhead}</h1>
          <p className="primary-text">
           {temp2whatweofferdescription}
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              {/* <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div> */}
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Contact Section */}
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Submit</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="nav-logo-container" style={{ color: 'Grey', fontFamily: 'Shrikhand, cursive', fontSize: '1rem', margin: 0 }}>
              <h1>{temp2name}</h1>
          </div>
          <div className="footer-icons">
            <Link to={temp2twitterlink} className="twitter social">
            <BsTwitter />
            </Link>
            <Link to={temp2linkedinlink} className="linkedin social">
            <SiLinkedin />
            </Link>
            <Link to={temp2facebooklink} className="facebook social">
            <FaFacebookF />
            </Link>
            <Link to={temp2instagramlink} className="instagram social">
            <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="footer-section-two">
          {/* <div className="footer-section-columns">
            <span>Help</span>
            <span>Share</span>
            <span>Work</span>
          </div> */}
          <div className="footer-section-columns">
            <span>{phone}</span>
            <span>{email}</span>
          </div>
          <div className="footer-section-columns">
            {/* <span>Terms & Conditions</span>
            <span>Privacy Policy</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
