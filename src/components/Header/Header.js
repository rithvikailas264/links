import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Search your book of Interest.</h2><br />
                <p className='header-text fs-18 fw-3'>This is an online Library web Applitcation, done using React for DevRev Round 2</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header