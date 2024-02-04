import React from 'react';
import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="navbar-links-container">
          <a className="navbar-links" href="#">
            PROJECT TEMPLATES
          </a>
          <a className="navbar-links" href="#">
            VOCAL PRESETS
          </a>
          <a className="navbar-links" href="#">
            OMNISPHERE PRESETS
          </a>
        </div>
        <div className="navbar-right">
          <a className="navbar-links" href="#">
            LOGIN/SIGNUP
          </a>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </>
  );
}
