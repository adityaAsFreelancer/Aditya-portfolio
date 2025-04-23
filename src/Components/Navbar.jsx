import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const Links = [
    {
      label: 'Home',
      path: "#hero-section"
    },
    {
      label: 'About',
      path: "#abouts"
    },
    {
      label: 'Project',
      path: "#projects"
    },
    {
      label: 'Contact',
      path: "#contact"
    },
  ]
  return (
    <nav className={`bg-gray-900 text-white shadow-lg sticky top-0 z-100 ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {Links?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className={`${idx === 0
                      ? 'text-white border-b-2 border-indigo-500'
                      : 'text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300'
                    } px-1 pt-1 inline-flex items-center text-sm font-medium`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex md:ml-4">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                  placeholder="Search..."
                />
              </div>
            </div>

            <div className="ml-3 relative hidden md:block">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="/imghero.png"
                  alt="User avatar"
                />
              </button>
            </div>

            <div className="flex items-center md:hidden ml-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg className="block h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
          {Links?.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
