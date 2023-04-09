import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategor';


const Home = () => {
    return (
        < >
            <div className=' bg-light'>
            <Banner></Banner>
            </div>
            <JobCategory></JobCategory>
        </>
    );
};

export default Home;