import React from 'react';
import { useForm } from "react-hook-form";

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://secure-inlet-47407.herokuapp.com/tour', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully added in Website.');
                    reset();
                }
            })
    };

    return (
        <div>
            <form className="flex flex-col w-4/6 mx-auto space-y-4 py-8" onSubmit={handleSubmit(onSubmit)}>
                <input className="border-2 rounded-lg p-1" {...register("title")} placeholder="Tour Title" required />
                <textarea className="border-2 rounded-lg p-1" {...register("description")} rows="4" placeholder="Please add a short Description" required />
                <input className="border-2 rounded-lg p-1" {...register("country")} placeholder="Country" required />
                <input className="border-2 rounded-lg p-1" {...register("duration")} placeholder="Tour Duration" required />
                <input className="border-2 rounded-lg p-1" type="number" {...register("price")} placeholder="Tour Cost" required />
                <input className="border-2 rounded-lg p-1" {...register("img_url")} placeholder="Give image url" required />
                <input className="ring-2 ring-red-200 bg-red-500 text-white font-bold tracking-wider rounded-lg p-1" type="submit" />
            </form>
        </div>
    );
};

export default AddTour;