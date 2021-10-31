import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    // for toggling the mobile menu button
    const [isOpen, setIsOpen] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            };
        };
        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    })

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };
    const toggle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <div className="w-9/12 mx-auto">
            {/* header top */}
            <div className="md:flex justify-between py-4 md:py-4 border-b-2">
                <ul className="md:flex space-x-8">
                    <li className="flex justify-center hover:text-red-500 font-medium text-gray-500">
                        <span className="text-red-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </span>
                        (404) 850 - 7080
                    </li>
                    <li className="flex justify-center hover:text-red-500 font-medium text-gray-500">
                        <span className="text-red-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        info@greatholidays.com
                    </li>
                </ul>
                {/* logged in email & photoURL show on header */}
                <div onClick={toggle} className="flex items-center cursor-pointer hover:text-red-400 relative">
                    {user?.email && <span className="flex items-center"><img className="rounded-full w-8 mr-2" src={user?.photoURL} alt="" />
                        <p>{user?.email}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg></span>}
                    {/* dropdown menu for logged in user */}
                    <ul className={isToggle ? "absolute top-10 text-gray-700 text-left bg-white border-2 border-gray-300 z-50 rounded-lg" : "hidden"}>
                        <li className=" px-4 py-2 rounded-lg hover:bg-red-400 border-b"><Link to="/add-new-tour">
                            <span className="flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                                Add New Tour</span></Link>
                        </li>
                        <li className="px-4 py-2 rounded-lg hover:bg-red-400 border-b">
                            <Link to="/my-orders">
                                <span className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    My Orders
                                </span>
                            </Link>
                        </li>
                        <li className="px-4 py-2 rounded-lg hover:bg-red-400 border-b">
                            <Link to="/all-orders">
                                <span className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    All Orders
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="font-semibold flex space-x-6 justify-center text-gray-700">
                    {user.email ?
                        <button onClick={logOut}
                            className="font-semibold bg-red-600 text-white px-6 py-1 rounded-md ring-4 ring-red-200 border-gray-300 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            &nbsp;Log Out
                        </button>
                        :
                        <li><NavLink to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#f15858"
                            }}>
                            <span className="flex space-y-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Login
                            </span>
                        </NavLink></li>
                    }
                    {user.email ? "" :
                        <li className=""><NavLink to="/signup"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#f15858"
                            }}>
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Sign Up
                            </span>
                        </NavLink></li>
                    }
                </ul>
            </div>
            {/* main header */}
            <div className="flex justify-between items-center py-4 md:py-0">
                <Link to="/">
                    <img className="w-1/5" src="https://i.ibb.co/4jSfvnN/Untitled-design-removebg-preview.png" alt="" />
                </Link>
                {/* menu for desktop */}
                <ul className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
                    <li><NavLink to="/home"
                        activeStyle={{
                            backgroundColor: "white",
                            fontWeight: "bold",
                            color: "#ef4444"
                        }}
                    >Home</NavLink></li>
                    <li><NavLink to="/tours"
                        activeStyle={{
                            backgroundColor: "white",
                            fontWeight: "bold",
                            color: "#f15858"
                        }}
                    >Tours</NavLink></li>
                    <li><NavLink to="/destinations"
                        activeStyle={{
                            backgroundColor: "white",
                            fontWeight: "bold",
                            color: "#f15858"
                        }}
                    >Destinations</NavLink></li>
                </ul>
                {/* mobile button here */}
                <button onClick={toggleButton} className="text-red-500 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
            </div>
            {/* mobile menu goes here */}
            <div className={isOpen ? "grid space-y-2 mb-2" : "hidden"}>
                <Link to="/"><span className="bg-red-200 rounded-md px-20 hover:bg-red-400">Home</span></Link>
                <Link to="/tours"><span className="bg-red-200 rounded-md px-20 hover:bg-red-400">Tours</span></Link>
                <Link to="/destinations"><span className="bg-red-200 rounded-md px-20 hover:bg-red-400">Destinations</span></Link>
            </div>
        </div>
    );
};

export default Header;