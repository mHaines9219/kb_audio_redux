import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <a className="logo">LOGO</a>
        </Link>
        <div className="navbar-links-container">
          <Link to="/category/project_templates">
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
          <Link to="/auth">
            <a className="navbar-links" href="#">
              LOGIN/SIGNUP
            </a>
          </Link>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </>
  );
}
