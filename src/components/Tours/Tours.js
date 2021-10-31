import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetch('https://secure-inlet-47407.herokuapp.com/tours')
            .then(res => res.json())
            .then(result => {
                setTours(result)
                setIsloading(false);
            })
    }, [])

    if (isLoading) {
        return <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 animate-spin text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </div>
    }

    return (
        <div>
            <div className="text-gray-600 tracking-wider my-12">
                <h1 className="text-3xl font-bold">OUR MOST POPULAR PACKAGES</h1>
                <p>Browse through our most popular tours!</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-9/12 mx-auto mb-8">
                {
                    tours.map(tour => <Tour
                        key={tour._id}
                        tour={tour} />)
                }
            </div>
        </div>

    );
};

export default Tours;