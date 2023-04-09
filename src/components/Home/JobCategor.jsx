import { key } from 'localforage';
import React, { useEffect, useState } from 'react';


const JobCategory = () => {
  
    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch('category.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])

    
      
    return (
        <div className='container pt-5'>
           <div className='text-center'>
            <h2 className='fw-bold'>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
            <div className='row mt-5'>
            {
                    categories.map((category) => <div className='col-md-3 text-center '> 
                    <div className=' bg-light rounded p-5 my-2'>
                        
                    <img className='img-category' src={category.image} alt="" />
                        <h2>{category.name}</h2>
                        <p>{category.availableJobs} Jobs Available</p>

                    </div>
                    
                    </div> )
           }
            
           </div>
        </div>
    );
};

export default JobCategory;