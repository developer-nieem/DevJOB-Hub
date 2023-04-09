import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { JobsContext } from '../../App';
import { CalendarIcon , CurrencyDollarIcon , PhoneIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/solid'


const JobDetails = () => {
    // get main data f
    const jobs =  useContext(JobsContext);

    // get route 
    const {id}  = useParams()

    const [singleJOb , setSingleJob] = useState([]);

    useEffect(()=>{
        const jobsData =  jobs.filter(job => job.id === id);
        setSingleJob(jobsData)
    },[])



    return (
        <div>
           <div className='bg-light py-5'>
           <div className='text-center py-5'>
            <h1>Job Details</h1>
           </div>
           </div>

           <div className='container'>
                <div className="row my-5">
                    {
                        singleJOb.map(job => <div className='col-md-8 mt-5'>
                                
                                <p> <span className='fw-bold'>Job Description:</span> {job.jobDescription}</p>
                                <p> <span className='fw-bold'>Job Responsibility:</span> {job.jobResponsibility}</p>
                                <p> <span className='fw-bold'>Educational Requirements:</span> <br /> {job.educationalRequirements}</p>
                                <p> <span className='fw-bold'>Experiences:</span> <br /> {job.experiences}</p>
                        </div> )
                    }
                    {
                        singleJOb.map(job => <div className='col-md-4 mt-5'>
                                <div className='bg-light p-4 rounded-1'>
                                <h3>Job Details</h3>
                                <hr />
                                <p><CurrencyDollarIcon  className='icon-size' /> <span className='fw-bold'>Salary:</span> {job.salary}</p>
                                <p><CalendarIcon  className='icon-size' />  <span className='fw-bold'>Job Title:</span> {job.salary}</p>

                                <h3 className='mt-4'>Contact Information</h3>
                                <hr />
                                <p><PhoneIcon  className='icon-size' />  <span className='fw-bold'>Phone:</span> {job.contactInformation.phone}</p>
                                <p><EnvelopeIcon  className='icon-size' />  <span className='fw-bold'>Phone:</span> {job.contactInformation.email}</p>
                                <p><MapPinIcon  className='icon-size' />  <span className='fw-bold'>Address:</span> {job.location}</p>
                                </div>
                                <button className='btn btn-primary w-100 my-3'>Apply Now</button>
                        </div> )
                    }
                </div>
           </div>
        </div>
    );
};

export default JobDetails;