import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../assets/Logo.png';

function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();


    const navLinks = [
        { to: '/', label: 'Home', id: 'home' },
        { to: '/#about', label: 'About', id: 'about' },
        { to: '/gallery', label: 'Gallery', id: 'gallery' },
        { to: '/contact', label: 'Contact', id: 'contact' },
    ];

    const closeMobileMenu = () => setIsOpen(false);

    const handleHomeClick = () => {
        // Jika sudah di halaman utama, scroll ke atas
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Jika menu mobile terbuka, tutup
        closeMobileMenu();
    };

    const renderLinks = () => {
        return navLinks.map((link) => {
            const isHashLink = link.to.startsWith('/#');

            const getClassName = ({ isActive }) => {
                const base = "font-semibold transition duration-300 text-sm tracking-wider";
                const mobileBase = " block py-2 text-lg"; // Style tambahan khusus mobile
                const active = "text-red-600";
                const inactive = "text-slate-700 hover:text-red-600";

                let isLinkActive = isActive;
                // Jika di halaman utama, status aktif ditentukan oleh scroll
                if (location.pathname === '/') {
                    isLinkActive = activeSection === link.id;
                }

                return `${base} ${isLinkActive ? active : inactive}`;
            };

            // --- Logika untuk merender link ---
            if (isHashLink) {
                return (
                    <HashLink
                        key={link.label}
                        to={link.to}
                        smooth
                        onClick={closeMobileMenu}
                        className={getClassName({ isActive: false })}
                    >
                        {link.label}
                    </HashLink>
                );
            }

            return (
                <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={link.id === 'home' ? handleHomeClick : closeMobileMenu}
                    className={getClassName}
                >
                    {link.label}
                </NavLink>
            );
        });
    };

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
                        {navLinks.map((link) => {
                            const isHashLink = link.to.startsWith('/#');

                            // Logika ini sekarang berlaku untuk SEMUA link
                            const classNameLogic = ({ isActive }) => {
                                const base = "font-semibold transition duration-300 text-sm tracking-wider";
                                const active = "text-red-600";
                                const inactive = "text-slate-700 hover:text-red-600";

                                // Kondisi aktif baru yang lebih akurat
                                let isLinkActive = isActive;
                                if (location.pathname === '/') {
                                    isLinkActive = activeSection === link.id;
                                }

                                return `${base} ${isLinkActive ? active : inactive}`;
                            };

                            if (isHashLink) {
                                return (
                                    <HashLink
                                        key={link.label}
                                        to={link.to}
                                        smooth
                                        className={classNameLogic({ isActive: false })}
                                    >
                                        {link.label}
                                    </HashLink>
                                );
                            }

                            return (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    end={link.to === '/'} // Prop 'end' hanya untuk link Home
                                    onClick={link.id === 'home' ? handleHomeClick : undefined}
                                    className={classNameLogic}
                                >
                                    {link.label}
                                </NavLink>
                            );
                        })}
                    </div>

                    {/* Tombol Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="text-slate-800 focus:outline-none">
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>


            {isOpen && (
                <div className="md:hidden pb-4 px-5 flex flex-col items-start space-y-1">
                    {navLinks.map((link) => {
                        const isHashLink = link.to.startsWith('/#');

                        // Menggunakan logika yang 100% SAMA dengan desktop
                        const classNameLogic = ({ isActive }) => {
                            const base = "font-semibold transition duration-300 text-sm tracking-wider block py-2"; // tambah 'block py-2' untuk mobile
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
                                <HashLink key={link.label} to={link.to} smooth onClick={closeMobileMenu} className={classNameLogic({ isActive: false })}>
                                    {link.label}
                                </HashLink>
                            );
                        }

                        return (
                            <NavLink key={link.label} to={link.to} end={link.to === '/'} onClick={link.id === 'home' ? handleHomeClick : closeMobileMenu} className={classNameLogic}>
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