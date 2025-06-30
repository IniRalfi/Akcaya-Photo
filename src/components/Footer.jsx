import React from 'react';

const socialLinks = [
    {
        href: 'https://instagram.com',
        label: 'Instagram',
        icon: (
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
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