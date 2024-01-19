import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import logo from "../Pictures/logo.png"
import "./NavBar.css"

const Navbar = () => {

const [header , SetHeader] = useState(false);

const scrollHeader = ()=>{
  if (window.scrollY >= 500) {

    SetHeader(true);
    
  }else{
    SetHeader(false);
  }
}
window.addEventListener("scroll", scrollHeader )


  return (
    <div>
      <header className={header ? "activee" : "flex"}>
        <nav data-aos="fade-right">
          <img src={logo} alt="" />
          <ul>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="products">ABOUT</NavLink></li>
            <li><NavLink to="e">COFFE</NavLink></li>
            <li><NavLink to="a">REVIEW</NavLink></li>
            <li><NavLink to="ee" >BLOG</NavLink></li>
           
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
