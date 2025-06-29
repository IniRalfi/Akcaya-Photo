import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/#about', label: 'About' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm shadow-md">
            <div className="max-w-6xl mx-auto px-5 md:px-0">
                <div className="flex items-center justify-between h-16">

                    <Link to="/" className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Akcaya Photo"
                            className="h-36 w-full"
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.to}

                                className={({ isActive }) =>
                                    `font-semibold transition duration-300 text-sm tracking-wider ${isActive && link.to !== '/#about'
                                        ? 'text-red-600' // Warna untuk link AKTIF
                                        : 'text-slate-700 hover:text-red-600' // Warna untuk link NON-AKTIF dan saat HOVER
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Tombol Hamburger untuk Mobile (tidak ada perubahan di sini) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-800 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu untuk Mobile (tidak ada perubahan di sini) */}
            {isOpen && (
                <div className="md:hidden pb-4 px-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-slate-700 font-semibold hover:text-red-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;