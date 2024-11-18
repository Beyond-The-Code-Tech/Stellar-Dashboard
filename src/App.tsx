import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import DashboardDemo from './components/dashboard/DashboardDemo';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Features />
            <CaseStudies />
            <Pricing />
          </main>
        } />
        <Route path="/demo" element={<DashboardDemo />} />
      </Routes>
    </div>
  );
}