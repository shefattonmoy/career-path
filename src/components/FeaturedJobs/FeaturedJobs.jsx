import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(() => {
        fetch('featured-jobs.json')
            .then(response => response.json())
            .then(data => setFeaturedJobs(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold py-4'>Featured Jobs</h2>
                <p style={{ color: "#757575" }}>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            </div>

            <div className='featured-jobs-container'>
                {
                    featuredJobs.map(singleJob => <SingleJob
                        key={singleJob.id}
                        singleJob={singleJob}
                    ></SingleJob>)
                }
            </div>
            <div className='flex flex-col items-center justify-center'>
                <button className='nav-btn'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;