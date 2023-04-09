import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategor';
import FeaturesJobs from './FeaturesJobs';


const Home = () => {
    return (
        < >
            <div className=' bg-light'>
            <Banner></Banner>
            </div>
            <JobCategory></JobCategory>
            <FeaturesJobs></FeaturesJobs>
        </>
    );
};

export default Home;