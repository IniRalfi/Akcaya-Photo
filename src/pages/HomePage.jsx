import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // <-- Import useInView
import Home from '../components/Home';
import About from '../components/About';
import SEO from '../components/SEO';

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
            <SEO
                title="Home"
                description="Selamat datang di Akcaya Photo, komunitas fotografi dari Pontianak. Lihat karya dan cerita kami."
            />
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