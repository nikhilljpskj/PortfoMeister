import React from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./Header.scss"

function Header() {
  return (
    <header className="header header-bg">
      <div className="nav-menu">
        {/* <Link to="/" className="nav-menu-item"><div className='home-icon'>Home</div></Link> */}
        <Link to="/" className="home-icon">PortfoMeister</Link>
        
        <Link to="/pricing" className="nav-menu-item">Pricing</Link>
        <Link to="/templates" className="nav-menu-item">Templates</Link>
        <Link to="/blog" className="nav-menu-item">Blog</Link>
        <Link to="/login" className="nav-menu-item">Sign In</Link>
        <Link to="/login" className="nav-menu-item-signout">Sign Out&nbsp;&nbsp;</Link>
        <Link to="/login" className="nav-menu-item-signouticon"> < LogoutIcon/></Link>
      </div>
    </header>
  );
}

export default Header;
