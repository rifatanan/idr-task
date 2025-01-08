'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const NavBar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <div className="w-full h-10 py-10 flex justify-between ">
            <div>Dua Page</div>
            <div className="flex justify-center items-center">
                <input
                    placeholder="Enter"
                    className="ml-[700px] outline-none focus:outline-none pl-[8px] p-1"
                ></input>
                <button>
                    <Image
                        src={'/Images/search.png'}
                        width={18}
                        height={18}
                        alt="search"
                        className="bg-[#F3F4F6]"
                    ></Image>
                </button>
            </div>
            <div>
                <div className="relative">
                    <button
                        className="btn px-5 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg"
                        onClick={toggleProfile}
                    >
                        Profile
                    </button>

                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-[200px] p-4 z-50">
                            <h3 className="font-bold text-lg">Profile Items</h3>
                            <ul className="mt-2 space-y-2">
                                <li className="p-2 hover:bg-gray-100 rounded-md">
                                    <a href="#" className="block text-gray-700">
                                        Profile Settings
                                    </a>
                                </li>
                                <li className="p-2 hover:bg-gray-100 rounded-md">
                                    <a href="#" className="block text-gray-700">
                                        Account Info
                                    </a>
                                </li>
                                <li className="p-2 hover:bg-gray-100 rounded-md">
                                    <a href="#" className="block text-gray-700">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
