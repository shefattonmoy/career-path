import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const {jobId} = useParams()

    const [job, setJob] = useState({})

    useEffect( () => {
        fetch(`/featured-jobs.json/${jobId}`)
        .then((response) => response.json())
        .then((data) => setJob(data))    
    },[jobId])

    return (
        <div className='container'>
            <h2>Job Description: {job.job_description}</h2>
            <p>Job Responsibility: {job.job_responsibilities}</p>
            <p>Educational Requirements: {job.educational_requirements}</p>
            <p>Experience: {job.experience}</p>
        </div>
    );
};

export default JobDetails;


