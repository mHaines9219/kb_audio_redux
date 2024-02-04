import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="navbar-links-container">
          <Link to="/category/product_templates">
            <a className="navbar-links" href="#">
              PROJECT TEMPLATES
            </a>
          </Link>
          <Link to="/category/vocal_presets">
            <a className="navbar-links" href="#">
              VOCAL PRESETS
            </a>
          </Link>
          <Link to="/category/omnisphere_presets">
            <a className="navbar-links" href="#">
              OMNISPHERE PRESETS
            </a>
          </Link>
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
