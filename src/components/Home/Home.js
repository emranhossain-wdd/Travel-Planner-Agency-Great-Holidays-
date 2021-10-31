import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import HomeTours from './HomeTours';
import OurServices from './OurServices';
import PopularDestination from './PopularDestination';

const Home = () => {


    return (
        <div>
            <Slider />
            <OurServices />
            <HomeTours />
            <Link to="/tours"><button className="flex mx-auto ring-4 ring-red-200 bg-red-500 font-bold text-white rounded-xl px-4 py-2 mb-4">
                View All Packages
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button></Link>
            <PopularDestination />
        </div>


    );
};

export default Home;