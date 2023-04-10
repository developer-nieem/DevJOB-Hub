import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../../App';
import { getShoppingCart } from '../../utilities/mainDB';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = () => {

    const data  =  useContext(JobsContext)

    // get data from localstorage
    const savedApplied =  getShoppingCart();

    let initialApply = [];

    for (const id in savedApplied) {
        const addedApplied =  data.find(pd=> pd.id  === id);

        if(addedApplied){
            initialApply.push(addedApplied)
        }
    }


    //  filter 

    const [jobs , setJobs] =  useState(initialApply);

    const [ filter, setFilter] =  useState(initialApply);


        const filterBy = (event) =>{
                console.log(event.target.value);
                const slectedValue =  event.target.value;
                
                const getFilterJobs =  jobs.filter(jb => jb.remoteOrOnsite  === slectedValue);
                setFilter(getFilterJobs)
       
                 }
        
    return (
        <div>
           <div className='bg-light py-5'>
           <div className='text-center py-5'>
            <h1>Applied Jobs</h1>
            <div className='text-start'>
            <img className='header-vector' src="Vector.png" alt="" />
            </div>
           </div>
           </div>

           {/* filter */}
                <div className='container'>
                <div className='row justify-content-end'>
                <select onChange={filterBy} className="form-select w-25 my-3" aria-label="example">
                <option selected disabled>Filter By</option>
                <option value='Remote'>Remote</option>
                <option value='Onsite'>Onsite</option>
                
                </select>
                </div>
                </div>
            {
                filter.map(ap=> <div className='container'>
                    
                    <div className="card my-3 " >
                            <div className="row g-0 ">
                                <div className="col-md-2">
                                <img src={ap.companyLogo} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">{ap.jobTitle}</h5>
                                <p className="card-text">{ap.companyName}</p>
                                <button className='btn btn-outline-primary m-2'>{ap.remoteOrOnsite}</button>
                                <button className='btn btn-outline-primary'>{ap.fulltimeOrParttime}</button>

                                <p className=''> <MapPinIcon  className='icon-size' /> {ap.location},   <span className='fw-bold ms-3'>Salary: </span> {ap.salary}</p>
                                </div>
                                </div>
                                <div className="col-md-2  mt-5">
                                       <Link to={`../job/${ap.id}`}>
                                       <button className='btn btn-primary mt-4'>View Details</button>
                                       </Link>
                                </div>
                            </div>
                            </div>
                </div> )
            }
        </div>
    );
};

export default AppliedJob;