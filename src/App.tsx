import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardDemo from './components/dashboard/DashboardDemo';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/demo" element={<DashboardDemo />} />
      </Routes>
    </div>
  );
}

export default App;