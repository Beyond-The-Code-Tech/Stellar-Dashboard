import React from 'react';
import { Star, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Star className="h-8 w-8 text-purple-500" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {t('features')}
                </a>
                <a href="#demo" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {t('demo')}
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {t('pricing')}
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              {t('getStarted')}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {t('features')}
            </a>
            <a href="#demo" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {t('demo')}
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {t('pricing')}
            </a>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}