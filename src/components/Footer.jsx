import React from 'react';
import instagram from '../assets/instagram.png'

const socialLinks = [
    {
        href: 'https://instagram.com',
        label: 'Instagram',
        icon: (
            <img src={instagram} alt="Instagram" className='h-6 md:h-8 w-full invert' />
        ),
    },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-800 text-slate-400">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-center sm:text-left">
                    © {currentYear} Akcaya Photo — All Rights Reserved
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 hover:text-white transition-colors"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </a>
                    ))}
                </span>
            </div>
        </footer>
    );
}

export default Footer;