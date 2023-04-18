import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/bbmd2tg3h5b7hdw5ihjd" alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1 Rlib'>Rithvik's_Library</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#965fca"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Search</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar