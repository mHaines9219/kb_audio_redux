import React from 'react';
import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <a href="#">PROJECT TEMPLATES</a>
        <a href="#">VOCAL PRESETS</a>
        <a href="#">LOGIN</a>
        <a href="#">SIGN UP</a>
        <ShoppingCartOutlinedIcon />
      </div>
    </>
  );
}
