import React, { useState } from 'react'; // <-- Import useState
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  // State untuk melacak section mana yang sedang aktif
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Kirim state 'activeSection' ke Navbar */}
      <Navbar activeSection={activeSection} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage setActiveSection={setActiveSection} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;