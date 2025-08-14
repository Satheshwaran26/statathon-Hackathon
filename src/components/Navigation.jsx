import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    navigate('/upload');
  };

  const handleHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={handleHome}
          >
            <div className="w-16 h-16 ">
              <img 
                src={logo} 
                alt="QUASISHIELD Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-black text-slate-800 font-['Manrope'] group-hover:text-slate-600 transition-colors duration-300">
                QUASISHIELD
              </div>
              <div className="text-sm text-slate-500 font-['Manrope'] font-medium">
                Advanced Security Platform
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-slate-600 font-semibold font-['Manrope'] text-base transition-all duration-300 hover:scale-105">
              Features
            </a>
            <a href="#about" className="text-slate-700 hover:text-slate-600 font-semibold font-['Manrope'] text-base transition-all duration-300 hover:scale-105">
              About
            </a>
            <button
              onClick={handleGetStarted}
              className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-2xl font-bold font-['Manrope'] text-base hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-2xl hover:bg-slate-100 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-1 bg-slate-600 transition-all duration-300 rounded-full ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}></span>
              <span className={`block w-5 h-1 bg-slate-600 transition-all duration-300 rounded-full mt-1 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-5 h-1 bg-slate-600 transition-all duration-300 rounded-full mt-1 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-slate-200">
            <a 
              href="#features" 
              className="block text-slate-700 hover:text-slate-600 font-semibold font-['Manrope'] text-base transition-colors duration-300 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block text-slate-700 hover:text-slate-600 font-semibold font-['Manrope'] text-base transition-colors duration-300 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <button
              onClick={() => {
                handleGetStarted();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-2xl font-bold font-['Manrope'] text-base hover:shadow-xl transition-all duration-300"
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
