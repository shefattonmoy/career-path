import React from 'react';
import './SingleJob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const SingleJob = (props) => {
    const { image, designation, name, type, duration, location, salary, id } = props.singleJob;
    const navigate = useNavigate()
    return (
        <div className='container single-job'>
            <img src={image} alt="" />
            <div className='single-job-name-designation'>
                <p className='category-title text-lg font-bold'>{designation}</p>
                <h6 className='font-medium' style={{ color: "#757575" }}>{name}</h6>
            </div>
            <div className='single-job-info'>

                <div className='flex gap-4'>
                    <p className='secondary-btn'><button>{type}</button></p>
                    <p className='secondary-btn'><button>{duration}</button></p>
                </div>
                <div className='flex gap-8'>
                    <p><FontAwesomeIcon icon={faLocationDot} />{location}</p>
                    <p><FontAwesomeIcon icon={faCircleDollarToSlot} />{salary}</p>
                </div>
                <button onClick={() => navigate(`JobDetails/${id}`)} className='nav-btn mt-5'>View Details</button>
            </div>
        </div>
    );
};

export default SingleJob;