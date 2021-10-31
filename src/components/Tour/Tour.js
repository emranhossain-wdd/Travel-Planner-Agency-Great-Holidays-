import React from 'react';
import { Link } from 'react-router-dom';

const Tour = props => {
    const { _id, title, img_url, duration, country, price, description } = props.tour;
    return (
        <div className="md:flex shadow-lg hover:shadow-2xl rounded-xl border-2 p-4">
            <img className="w-11/12 md:w-2/5 rounded-xl mx-auto" src={img_url} alt="" />
            <div className="text-left pl-4 space-y-4">
                <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
                <div className="flex justify-between">
                    <p className="flex bg-red-100 text-red-500 rounded-xl py-0.5 px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {duration}
                    </p>
                    <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {country}
                    </p>
                </div>
                <p className="text-gray-500">{description}</p>
                <div className="md:flex justify-between">
                    <p className="flex rounded-xl bg-red-100 py-0.5 px-2 mb-2 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {price}
                    </p>
                    <button className="bg-red-500 text-white ring ring-red-200 rounded-xl py-0.5 px-8 md:px-4 font-semibold">
                        <Link to={`tour/${_id}`}>
                            <span className="flex">
                                Check Availability
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tour;