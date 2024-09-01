"use client";
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const handleNav = () => {
        setNav(prev => !prev);
    };

    const handleNavigation = (path) => {
        setNav(false);
        window.location.href = path;
        setCurrentPath(path);
    };

    const navItems = [
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'Analysis', path: '/analysis' },
    ];

    return (
        <nav className='bg-black flex justify-between items-center h-20 py-2 mx-auto px-4 md:px-16 text-white z-50'>
            {/* Center the nav items in the desktop view */}
            <ul className='hidden md:flex space-x-6 justify-center flex-1'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`p-2 text-xl font-bold hover:text-bright_green cursor-pointer transition-colors duration-300 ${currentPath === item.path ? 'text-green-500' : ''}`}
                        onClick={() => handleNavigation(item.path)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>

            <div onClick={handleNav} className='md:hidden cursor-pointer z-50'>
                {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>

            <ul
                className={`fixed top-20 left-0 w-full h-[calc(100%-5rem)] bg-black transition-transform duration-500 ease-in-out z-40 flex flex-col justify-center items-center space-y-6 ${nav ? 'transform translate-y-0' : 'transform translate-y-full'}`}
            >
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`text-xl font-bold p-4 rounded-xl text-center hover:text-bright_green cursor-pointer transition-colors duration-300 ${currentPath === item.path ? 'text-green-500' : ''}`}
                        onClick={() => handleNavigation(item.path)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;