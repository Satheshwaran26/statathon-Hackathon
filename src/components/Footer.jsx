import React from 'react';

const Footer = ({ onGetStarted, onHome }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-lg">🛡️</span>
              </div>
              <div>
                <div className="text-lg font-bold font-['Inter']">CyberShield</div>
                <div className="text-xs text-gray-400 font-['Inter']">Security & Privacy</div>
              </div>
            </div>
            <p className="text-gray-300 font-['Inter'] leading-relaxed mb-4 max-w-md text-sm">
              Advanced cybersecurity tool for detecting, analyzing, and rectifying cyber attacks in datasets. 
              Protect your data with state-of-the-art privacy preservation techniques.
            </p>
            <button
              onClick={onGetStarted}
              className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-orange-600 text-white rounded-xl font-semibold font-['Inter'] text-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 font-['Inter']">Quick Links</h3>
            <ul className="space-y-2 font-['Inter']">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <button 
                  onClick={onHome}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  Home
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 font-['Inter']">Contact</h3>
            <ul className="space-y-2 font-['Inter']">
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>📧</span>
                <span>support@cybershield.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>🌐</span>
                <span>www.cybershield.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>📱</span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-['Inter'] text-sm">
            © {currentYear} CyberShield. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
