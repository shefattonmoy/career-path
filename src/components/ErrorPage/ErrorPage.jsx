import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-5xl'>Page not found</h1>
            <p className='text-3xl mt-3' style={{ color: "#717171" }}>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default ErrorPage;