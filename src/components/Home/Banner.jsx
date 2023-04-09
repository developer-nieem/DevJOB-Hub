import React from 'react';

const Banner = () => {
    return (
        <div className='container py-5'>
            <div className="row py-5 align-items-center">
                <div className="col-md-6 ">
                <h1 className='fw-bolder'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span></h1>
                <p className='text-black'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>

                <button className='btn btn-primary'>Get Started</button>
                </div>
                <div className="col-md-6">
                <img className='img-fluid' src="https://i.ibb.co/f0xLzw7/P3-OLGJ1-copy-1.png" alt="P3-OLGJ1-copy-1" border="0" />
                </div>
            </div>
        </div>
    );
};

export default Banner;