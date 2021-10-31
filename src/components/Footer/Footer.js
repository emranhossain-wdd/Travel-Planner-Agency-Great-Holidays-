import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="w-9/12 mx-auto md:flex items-center border-b">
                <Link to="/">
                    <img className="w-2/5 mx-auto md:ml-0" src="https://i.ibb.co/4jSfvnN/Untitled-design-removebg-preview.png" alt="" />
                </Link>
                <div className="text-white tracking-wider">
                    <h1 className="text-3xl font-bold">Stay Happy and Travel all Over the World</h1>
                    <p className="md:w-2/3 mx-auto">Happy times come and go, but the memories stay forever. Memories never die, we learn to live with them.</p>
                </div>
            </div>
            <p className="text-gray-100 py-2 tracking-wider font-mono">&copy; GREAT HOLYDAYS. All rights reserve</p>
        </div>
    );
};

export default Footer;