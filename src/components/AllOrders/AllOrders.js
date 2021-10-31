import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://secure-inlet-47407.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(result => setAllOrders(result))

    }, [control]);

    const onSubmitUpdate = id => {
        const data = { status: "confirmed" };
        fetch(`https://secure-inlet-47407.herokuapp.com/all-orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Update Successful');
                    setControl(!control);
                }
            });
    };

    const onSubmitDelete = id => {
        const proceed = window.confirm('Are you sure, you want to DELETE?')
        if (proceed) {
            fetch(`https://secure-inlet-47407.herokuapp.com/all-orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrders);
                    }
                })
        }
    };

    return (
        <div className="md:h-screen">
            <h1 className="text-red-500 font-bold text-2xl py-4">All Orders</h1>
            <table className="table-auto w-9/12 mx-auto border">
                <thead>
                    <tr>
                        <th className="border-2 border-red-100">Sr. No.</th>
                        <th className="border-2 border-red-100">Name and Email</th>
                        <th className="border-2 border-red-100">Place</th>
                        <th className="border-2 border-red-100">Title</th>
                        <th className="border-2 border-red-100">Check In Date</th>
                        <th className="border-2 border-red-100">Status</th>
                        <th className="border-2 border-red-100">Action</th>
                    </tr>
                </thead>
                {allOrders.map((order, i) => <tbody key={i}>
                    <tr>
                        <td className="border-2 border-red-100">{i + 1}</td>
                        <td className="border-2 border-red-100">
                            <p>{order?.name}</p>
                            <p>{order?.email}</p>
                        </td>
                        <td className="border-2 border-red-100 w-1/12 h-1/12">
                            <img className="rounded-lg" src={order?.img_url} alt="" />
                        </td>
                        <td className="border-2 border-red-100">{order?.title}</td>
                        <td className="border-2 border-red-100">{order?.checkInDate}</td>
                        <td className="border-2 border-red-100">
                            <div className="flex justify-center">
                                <p>{order?.status}</p>
                                {order.status === 'pending' && <button onClick={() => onSubmitUpdate(order?._id)} className="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg></button>}
                            </div>
                        </td>
                        <td className="border-2 border-red-100">
                            <button onClick={() => onSubmitDelete(order?._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    );
};

export default AllOrders;