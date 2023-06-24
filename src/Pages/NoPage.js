import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div style={{height:"75vh"}}>
            <div className='d-flex justify-content-between align-content-center'>
                <h1>Page No found</h1>
                <Link to="/"><h1 className='mt-5'>Go Home</h1></Link>
            </div>
        </div>
    );
};

export default NoPage;