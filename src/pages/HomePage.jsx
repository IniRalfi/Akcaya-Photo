import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // <-- Import useInView
import Home from '../components/Home';
import About from '../components/About';

function HomePage({ setActiveSection }) {
    // Setup pengamat untuk section Home
    const { ref: homeRef, inView: homeInView } = useInView({
        threshold: 0.3,
    });

    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        // Jika section About terlihat, ia yang jadi prioritas utama
        if (aboutInView) {
            setActiveSection('about');
        }
        // Jika tidak, baru kita cek apakah section Home yang terlihat
        else if (homeInView) {
            setActiveSection('home');
        }
    }, [homeInView, aboutInView, setActiveSection]);

    return (
        <>
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