import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AuthModal from './AuthModal'; // Assuming AuthModal component exists
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
      from-purple-900 via-gray-900 to-black text-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">{t('welcome')}</span>
            <span className="block text-purple-400">{t('stellarDashboard')}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t('description')}
          </p>

          {/* Try Demo Button */}
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/demo">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md shadow"
              >
                <span
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium 
                  rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                >
                  {t('tryDemo')}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Software Illustration Only */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <img
            src="https://ibb.co/QKhGgKX" // Add the path to your illustration image here
            alt="Software Illustration"
            className="mx-auto w-full md:w-4/5 lg:w-4/5 xl:w-5/5 -mt-6 rounded-lg border-2 border-white border-opacity-35" // Added border and white color
          />
        </motion.div>
      </div>

      {/* Auth Modal */}
      {isModalOpen && (
        <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}
