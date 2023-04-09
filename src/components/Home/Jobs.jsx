import React from 'react';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {

    const {companyLogo, jobTitle, companyName, remoteOrOnsite, location, salary, fulltimeOrParttime, id} =  job;
    return (
        
           <div >
                    <div className="col">
                    <div className="card h-100">
                    <img src={companyLogo} className="company-logo" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{jobTitle}</h5>
                        <p className="card-text">{companyName}</p>
                        <button className='btn btn-outline-primary m-2'>{remoteOrOnsite}</button>
                        <button className='btn btn-outline-primary'>{fulltimeOrParttime}</button>

                        <p className='my-4'> <MapPinIcon  className='icon-size' /> {location},   <span className='fw-bold ms-3'>Salary: </span> {salary}</p>
                        
                       <Link to={id}> <button className='btn btn-primary'>View Details</button></Link>
                    </div>
                    </div>
                </div>
  
        </div>
       
    );
};

export default Jobs;