import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // <-- Import useInView
import Home from '../components/Home';
import About from '../components/About';

// Terima 'setActiveSection' sebagai props
function HomePage({ setActiveSection }) {
    // Setup pengamat untuk section Home
    const { ref: homeRef, inView: homeInView } = useInView({
        threshold: 0.5, // Dianggap 'inView' jika 50% section terlihat
    });

    // Setup pengamat untuk section About
    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0.5,
    });

    // Gunakan useEffect untuk mengubah state di App.jsx saat view berubah
    useEffect(() => {
        if (homeInView) {
            setActiveSection('home');
        } else if (aboutInView) {
            setActiveSection('about');
        }
    }, [homeInView, aboutInView, setActiveSection]);

    return (
        <>
            {/* Beri ref ke wrapper div agar bisa diamati */}
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
        </>
    );
}

export default HomePage;