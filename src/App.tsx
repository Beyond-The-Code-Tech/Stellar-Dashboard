import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer'; // Import Footer component

const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Pricing = lazy(() => import('./components/Pricing'));
const DashboardDemo = lazy(() => import('./components/dashboard/DashboardDemo'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    smoothscroll.polyfill();

    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          element.setAttribute('tabindex', '-1');
          element.focus();
        }, 100);
      }
    }

    // Simulate a delay in loading components
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulated delay for better user experience
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      <Helmet>
        <title>Stellar Dashboard</title>
        <meta
          name="description"
          content="A modern analytics platform with real-time visualization."
        />
      </Helmet>
      <Navbar />
      {isLoading ? (
        <div className="text-center text-white">Loading...</div> // Optional custom loading state
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <main aria-labelledby="main-content">
                <Hero />
                <Features />
                <CaseStudies />
                <Pricing />
              </main>
            }
          />
          <Route path="/demo" element={<DashboardDemo />} />
          <Route path="*" element={<div className="text-center text-white">Page Not Found</div>} />
        </Routes>
      )}

      <Footer /> {/* Include the Footer */}
    </div>
  );
}

export default App;
