import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';

const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Pricing = lazy(() => import('./components/Pricing'));
const DashboardDemo = lazy(() => import('./components/dashboard/DashboardDemo'));

function App() {
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
      <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Features />
                <CaseStudies />
                <Pricing />
              </main>
            }
          />
          <Route path="/demo" element={<DashboardDemo />} />
          <Route path="*" element={<div className="text-center">Page Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
