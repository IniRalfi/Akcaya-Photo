import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // <-- Import useInView
import Home from '../components/Home';
import About from '../components/About';

function HomePage({ setActiveSection }) {
    // Setup pengamat untuk section Home
    const { ref: homeRef, inView: homeInView } = useInView({
        threshold: 0.5,
    });


    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0.5,
    });


    useEffect(() => {
        if (homeInView) {
            setActiveSection('home');
        } else if (aboutInView) {
            setActiveSection('about');
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