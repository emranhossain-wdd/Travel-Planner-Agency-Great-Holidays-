import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const TourDetails = () => {
    const { user } = useAuth();
    const [tour, setTour] = useState({});
    const { id } = useParams();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://secure-inlet-47407.herokuapp.com/tour/${id}`)
            .then(res => res.json())
            .then(result => setTour(result))
    }, [id])

    const onSubmit = data => {
        data.title = tour?.title;
        data.img_url = tour?.img_url;
        data.email = user?.email;
        data.name = user?.displayName;
        data.price = tour?.price;
        data.duration = tour?.duration;
        data.status = 'pending';

        fetch("https://secure-inlet-47407.herokuapp.com/booking", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booked Successfully');
                }
            });
    };

    return (
        <div>
            <div className="md:flex shadow-md rounded-xl  w-9/12 md:w-1/2 mx-auto border-2 p-4 my-8">
                <img className="w-11/12 md:w-2/5 rounded-xl mx-auto" src={tour?.img_url} alt="" />
                <div className="text-left pl-4 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-600">{tour?.title}</h2>
                    <div className="md:flex justify-between space-y-4 md:space-y-0">
                        <p className="flex bg-red-100 text-red-500 rounded-xl py-0.5 px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {tour?.duration}
                        </p>
                        <p className="flex rounded-xl bg-red-100 py-0.5 px-2 mb-2 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {tour?.price}
                        </p>
                        <p className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {tour?.country}
                        </p>
                    </div>
                    <p className="text-gray-500">{tour?.description}</p>
                </div>
            </div>
            <form
                className="flex flex-col w-4/6 mx-auto text-left mb-8"
                onSubmit={handleSubmit(onSubmit)}>
                <label className="font-semibold" htmlFor="name">Your Full Name</label>
                <input
                    className="border-2 p-2 rounded-lg mb-4"
                    type="text"
                    defaultValue={user?.displayName}
                    id="name"
                />
                <label className="font-semibold" htmlFor="email">Your Email</label>
                <input
                    className="border-2 p-2 rounded-lg mb-4"
                    type="email"
                    defaultValue={user?.email}
                    id="email"
                />
                <label className="font-semibold" htmlFor="date">Check In Date</label>
                <input
                    className="border-2 p-2 rounded-lg mb-4"
                    type="date"
                    {...register("checkInDate")}
                    id="date" required
                />
                <label className="font-semibold" htmlFor="member">Members</label>
                <input
                    className="border-2 p-2 rounded-lg mb-4"
                    type="number"
                    {...register("members", { min: 1, max: 99 })}
                    id="Members" required
                />
                <label className="font-semibold" htmlFor="payment">Payment Methods</label>
                <select
                    className="border-2 p-2 rounded-lg mb-4"
                    {...register("payment")} id="payment" >
                    <option value="bKash">bKash</option>
                    <option value="Rocket">Rocket</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Muster Card">Muster Card</option>
                </select>
                <input className="text-white font-bold cursor-pointer bg-red-400 hover:bg-red-500 py-2 rounded-lg" type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default TourDetails;