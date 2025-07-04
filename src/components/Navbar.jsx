import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../assets/Logo.png'; // Pastikan path dan nama file 'Logo.png' sudah benar

function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Data untuk semua link, tidak perlu diubah
    const navLinks = [
        { to: '/', label: 'Home', id: 'home' },
        { to: '/#about', label: 'About', id: 'about' },
        { to: '/gallery', label: 'Gallery', id: 'gallery' },
        { to: '/contact', label: 'Contact', id: 'contact' },
    ];

    // Fungsi untuk menutup menu mobile
    const closeMobileMenu = () => setIsOpen(false);

    // Fungsi untuk handle klik pada link Home/Logo
    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMobileMenu();
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
            {/* PERBAIKAN: Padding konsisten di semua layar */}
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between h-16">

                    {/* Logo dengan ukuran yang sudah benar */}
                    <Link to="/" onClick={handleHomeClick} className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Akcaya Photo"
                            className="h-28 w-auto"
                        />
                    </Link>

                    {/* Navigasi Desktop */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => {
                            const isHashLink = link.to.startsWith('/#');

                            const getClassName = ({ isActive }) => {
                                const base = "font-semibold transition duration-300 text-sm tracking-wider";
                                const active = "text-red-600";
                                const inactive = "text-slate-700 hover:text-red-600";

                                let isLinkActive = isActive;
                                if (location.pathname === '/') {
                                    isLinkActive = activeSection === link.id;
                                }

                                return `${base} ${isLinkActive ? active : inactive}`;
                            };

                            if (isHashLink) {
                                return (
                                    <HashLink key={link.label} to={link.to} smooth className={getClassName({ isActive: false })}>
                                        {link.label}
                                    </HashLink>
                                );
                            }

                            return (
                                <NavLink key={link.label} to={link.to} end={link.to === '/'} onClick={link.id === 'home' ? handleHomeClick : undefined} className={getClassName}>
                                    {link.label}
                                </NavLink>
                            );
                        })}
                    </div>

                    {/* Tombol Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="text-slate-800 focus:outline-none">
                            {isOpen ? (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>)}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden pb-4 px-5 flex flex-col items-start space-y-2">
                    {navLinks.map((link) => {
                        const isHashLink = link.to.startsWith('/#');

                        const getClassName = ({ isActive }) => {
                            const base = "font-semibold transition duration-300 text-lg block py-2";
                            const active = "text-red-600";
                            const inactive = "text-slate-700 hover:text-red-600";

                            let isLinkActive = isActive;
                            if (location.pathname === '/') {
                                isLinkActive = activeSection === link.id;
                            }

                            return `${base} ${isLinkActive ? active : inactive}`;
                        };

                        if (isHashLink) {
                            return (
                                <HashLink key={link.label} to={link.to} smooth onClick={closeMobileMenu} className={getClassName({ isActive: false })}>
                                    {link.label}
                                </HashLink>
                            );
                        }

                        return (
                            <NavLink key={link.label} to={link.to} end={link.to === '/'} onClick={link.id === 'home' ? handleHomeClick : closeMobileMenu} className={getClassName}>
                                {link.label}
                            </NavLink>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}

export default Navbar;