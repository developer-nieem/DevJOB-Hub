import React, { useContext } from 'react';
import { JobsContext } from '../../App';
import { getShoppingCart } from '../../utilities/mainDB';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = () => {

const data  =  useContext(JobsContext)


    const savedApplied =  getShoppingCart();

    let initialApply = [];

    for (const id in savedApplied) {
        const addedApplied =  data.find(pd=> pd.id  === id);

        if(addedApplied){
            initialApply.push(addedApplied)
        }
    }


    return (
        <div>
           <div className='bg-light py-5'>
           <div className='text-center py-5'>
            <h1>Applied Jobs</h1>
           </div>
           </div>

            {
                initialApply.map(ap=> <div className='container'>
                    
                    <div class="card my-3 " >
                            <div class="row g-0 ">
                                <div class="col-md-2">
                                <img src={ap.companyLogo} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                <h5 className="card-title">{ap.jobTitle}</h5>
                                <p className="card-text">{ap.companyName}</p>
                                <button className='btn btn-outline-primary m-2'>{ap.remoteOrOnsite}</button>
                                <button className='btn btn-outline-primary'>{ap.fulltimeOrParttime}</button>

                                <p className=''> <MapPinIcon  className='icon-size' /> {ap.location},   <span className='fw-bold ms-3'>Salary: </span> {ap.salary}</p>
                                </div>
                                </div>
                                <div class="col-md-2  mt-5">
                                       <Link to={`../${ap.id}`}>
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