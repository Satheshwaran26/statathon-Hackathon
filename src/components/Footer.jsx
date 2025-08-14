import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/upload');
  };

  const handleHome = () => {
    navigate('/');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-1 gap-12">
          {/* Company Info */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={logo} 
                alt="QUASISHIELD Logo" 
                className="w-12 h-12 object-contain mr-4"
              />
              <div>
                <h3 className="text-2xl font-black text-gray-900 font-['Manrope']">QUASISHIELD</h3>
                <p className="text-sm text-gray-600 font-['Manrope']">Advanced Security Platform</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 font-['Manrope'] leading-relaxed max-w-2xl mx-auto">
              Enterprise-grade cybersecurity tool for detecting, analyzing, and rectifying cyber attacks in datasets. 
              Protect your data with state-of-the-art privacy preservation techniques.
            </p>
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold font-['Manrope'] hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 font-['Manrope'] mb-4 md:mb-0">
              © {currentYear} QUASISHIELD. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-['Manrope'] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-['Manrope'] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-['Manrope'] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
