import React from 'react';
import './Navbar.css';
import logo from '../All Images/CareerPath.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
            <button className='nav-btn'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Navbar;