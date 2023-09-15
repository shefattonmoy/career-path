import React, { useEffect, useState } from 'react';
import './JobCategory.css';
import SubCategory from '../SubCategory/SubCategory';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('job-category.json')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold py-4'>Job Category List</h2>
                <p style={{ color: "#757575"}}>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            </div>

            <div className='job-container'>
                {
                    categories.map(category => <SubCategory
                        key={category.id}
                        category={category}
                    ></SubCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;