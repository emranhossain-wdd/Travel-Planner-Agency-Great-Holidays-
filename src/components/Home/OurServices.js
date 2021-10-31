import React from 'react';

const OurServices = () => {
    return (
        <div className="bg-gray-100 pb-12">
            <div className="text-gray-600 tracking-wider py-12">
                <h1 className="text-3xl font-bold">OUR BEST SERVICES</h1>
                <p>Why we are the best for our client</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-9/12 mx-auto">
                <div className="bg-white border-2 py-4 px-8 space-y-4 rounded-xl">
                    <div className="w-1/3 border-8 border-pink-300 flex justify-center mx-auto rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-12 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold tracking-wider text-gray-600">BEST DESTINATIONS</h4>
                        <p className="tracking-wider">Find out what the best destinations in the World are as awarded by millions of real...</p>
                    </div>
                </div>
                <div className="bg-white border-2 py-4 px-8 space-y-4 rounded-xl">
                    <div className="w-1/3 border-8 border-pink-300 flex justify-center mx-auto rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-12 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold tracking-wider text-gray-600">BEST PRICE GUARANTEED</h4>
                        <p className="tracking-wider">We constantly ensures to have the lowest prices available online and it is committed to protect...</p>
                    </div>
                </div>
                <div className="bg-white border-2 py-4 px-8 space-y-4 rounded-xl">
                    <div className="w-1/3 border-8 border-pink-300 flex justify-center mx-auto rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-12 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-bold tracking-wider text-gray-600">INSTANT BOOKING</h4>
                        <p className="tracking-wider">With our Fast Booking option you can book the following public tours and pay securely by...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;