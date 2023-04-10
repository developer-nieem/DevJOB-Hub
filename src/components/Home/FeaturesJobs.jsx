import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../../App';
import Jobs from './Jobs';

const FeaturesJobs = () => {

    const [data, setData] = useState(4)
    const jobs = useContext(JobsContext);
        

    const sliceData =  jobs.slice(0, data);

    const loadMore =() =>{
        setData(jobs.length)
    }
    return (
        <div className='container pt-5'>
            <div className='text-center'>
            <h2 className='fw-bold'>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>

           <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
            {
               sliceData.map(job => <Jobs 
                    key={job.id}
                    job ={job}
                    ></Jobs>)
            }
           </div>
                
               {
                    data > 5 ? '' : <div className='text-center my-5'>
                    <button onClick={loadMore} className='btn btn-primary btn-lg'>See All Jobs</button>
                    </div>
                }
        </div>
    );
};

export default FeaturesJobs;