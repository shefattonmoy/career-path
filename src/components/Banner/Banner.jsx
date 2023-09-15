import React from 'react';
import './Banner.css';
import banner from '../All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='container banner-parent'>
            <div className='banner-lines'>
                <h1 className='text-5xl font-bold banner-title'>One Step <br /> Closer To Your <br /> <span className='style-span'>Dream Job</span></h1>
                <p className='py-6'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='nav-btn'>Get Started</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;