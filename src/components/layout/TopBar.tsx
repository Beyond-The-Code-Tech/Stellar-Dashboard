import React from 'react';
import { Bell, Search, Sun, Moon } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const TopBar: React.FC = () => {
  const { theme, setTheme } = useStore();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center">
            <div className="max-w-xs w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  id="search"
                  className="block w-full bg-white dark:bg-gray-700 py-2 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-6 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button className="ml-6 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};