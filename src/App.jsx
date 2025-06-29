import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
