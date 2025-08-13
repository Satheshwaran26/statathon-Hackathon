import React, { useState, useEffect } from 'react';

const Navigation = ({ onGetStarted, onHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={onHome}
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <span className="text-lg text-white">🛡️</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-800 font-['Inter'] group-hover:text-emerald-600 transition-colors duration-300">
                CyberShield
              </div>
              <div className="text-xs text-gray-500 font-['Inter']">
                Security & Privacy
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium font-['Inter'] text-sm transition-colors duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium font-['Inter'] text-sm transition-colors duration-300">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium font-['Inter'] text-sm transition-colors duration-300">
              About
            </a>
            <button
              onClick={onGetStarted}
              className="px-5 py-2 bg-emerald-600 text-white rounded-xl font-semibold font-['Manrope'] text-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`block w-4 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`block w-4 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-4 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-3 border-t border-gray-200">
            <a 
              href="#features" 
              className="block text-gray-700 hover:text-emerald-600 font-medium font-['Inter'] text-sm transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block text-gray-700 hover:text-emerald-600 font-medium font-['Inter'] text-sm transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-emerald-600 font-medium font-['Inter'] text-sm transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <button
              onClick={() => {
                onGetStarted();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-5 py-2 bg-emerald-600 text-white rounded-xl font-semibold font-['Manrope'] text-sm hover:shadow-md transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
