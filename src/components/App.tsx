import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import DashboardDemo from './dashboard/DashboardDemo';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Pricing />
          </>
        } />
        <Route path="/demo" element={<DashboardDemo />} />
      </Routes>
    </div>
  );
}

export default App;