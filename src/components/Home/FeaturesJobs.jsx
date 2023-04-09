import React, { useContext } from 'react';
import { JobsContext } from '../../App';
import Jobs from './Jobs';

const FeaturesJobs = () => {
    const jobs = useContext(JobsContext);
    console.log(jobs);
    return (
        <div className='container pt-5'>
            <div className='text-center'>
            <h2 className='fw-bold'>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>

           <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
            {
                jobs.map(job => <Jobs 
                    key={job.id}
                    job ={job}
                    ></Jobs>)
            }
           </div>
        </div>
    );
};

export default FeaturesJobs;