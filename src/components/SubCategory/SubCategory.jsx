import React from 'react';
import './SubCategory.css';

const SubCategory = (props) => {
    const { image, title, paragraph } = props.category;
    return (
        <div className='sub-category'>
            <img src={image} alt="" />
            <div className='sub-category-info'>
                <h6 className='category-title text-lg font-bold'>{title}</h6>
                <p style={{ color: "#757575"}}>{paragraph}</p>
            </div>
        </div>
    );
};

export default SubCategory;