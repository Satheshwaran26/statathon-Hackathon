import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/upload');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium mb-8 border border-gray-200">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Advanced Cybersecurity Platform
              </div>
              
              {/* Title */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 font-['Manrope'] leading-tight">
                  QUASISHIELD
                </h1>
                <div className="text-xl md:text-2xl font-semibold text-gray-600 font-['Manrope'] leading-tight">
                  Cyber Attack Simulation & Fixer
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-600 max-w-xl mb-10 font-['Manrope'] leading-relaxed">
                Enterprise-grade cybersecurity tool for detecting, analyzing, and rectifying cyber attacks in datasets. 
                Protect your data with state-of-the-art privacy preservation techniques and AI-powered threat detection.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-base font-['Manrope'] hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🚀</span>
                    Get Started Now
                  </span>
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold text-base font-['Manrope'] border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span className="flex items-center justify-center">
                    <span className="mr-2">📖</span>
                    Learn More
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 max-w-sm">
                <div className="text-left p-5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="text-3xl font-black text-gray-900 font-['Manrope'] mb-2">99.9%</div>
                  <div className="text-sm text-gray-600 font-['Manrope'] font-medium">Detection Rate</div>
                </div>
                <div className="text-left p-5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="text-3xl font-black text-gray-900 font-['Manrope'] mb-2">50+</div>
                  <div className="text-sm text-gray-600 font-['Manrope'] font-medium">Attack Types</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              {/* Data Table Display */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 font-['Manrope']">Security Analytics Dashboard</h3>
                  <p className="text-sm text-gray-600 mt-1">Real-time threat detection metrics</p>
                </div>
                
                {/* Table Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Threat Detection Row */}
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">Threat Detection</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">99.9%</div>
                        <div className="text-xs text-green-500">Success Rate</div>
                      </div>
                    </div>
                    
                    {/* Attack Types Row */}
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">Attack Types</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">50+</div>
                        <div className="text-xs text-blue-500">Identified</div>
                      </div>
                    </div>
                    
                    {/* Response Time Row */}
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">Response Time</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">&lt;2s</div>
                        <div className="text-xs text-purple-500">Average</div>
                      </div>
                    </div>
                    
                    {/* Data Processed Row */}
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">Data Processed</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-orange-600">1TB+</div>
                        <div className="text-xs text-orange-500">Daily</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span>Malware detected in dataset_001.csv</span>
                        <span className="ml-auto text-gray-400">2 min ago</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>SQL injection attempt blocked</span>
                        <span className="ml-auto text-gray-400">5 min ago</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                        <span>Data sanitization completed</span>
                        <span className="ml-auto text-gray-400">8 min ago</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm text-gray-700">System Status: Active</span>
                      </div>
                      <div className="text-xs text-gray-500">24/7 Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats Below Table */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-gray-900 font-['Manrope']">24/7</div>
                  <div className="text-sm text-gray-600 font-['Manrope']">Real-time Monitoring</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-gray-900 font-['Manrope']">100%</div>
                  <div className="text-sm text-gray-600 font-['Manrope']">Data Privacy Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium mb-6 border border-gray-200">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Core Features
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 font-['Manrope']">
              Why Choose QUASISHIELD?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Manrope']">
              Comprehensive cybersecurity solution designed for modern data protection challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group text-center p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Manrope']">
                Attack Detection
              </h3>
              <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                Advanced AI algorithms to identify cyber threats and vulnerabilities in real-time
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Manrope']">
                Smart Solutions
              </h3>
              <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                AI-powered recommendations for threat mitigation and security optimization
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Manrope']">
                Auto Fix
              </h3>
              <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                Automatically clean and sanitize malicious data while preserving data integrity
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group text-center p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Manrope']">
                Reports
              </h3>
              <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                Comprehensive security analysis and actionable insights for compliance
              </p>
            </div>
          </div>

 

          {/* Feature Highlights */}
       
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium mb-6 border border-gray-200">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Process Flow
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 font-['Manrope']">
              How QUASISHIELD Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Manrope']">
              Follow the flow to secure your data in 5 simple steps
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Flow Chart Container */}
            <div className="relative">
              {/* Main Flow Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 transform -translate-y-1/2 rounded-full"></div>
              
              {/* Flow Steps */}
              <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      1
                    </div>
                    
                    {/* Flow Arrow */}
                    <div className="hidden lg:block absolute top-10 right-0 w-8 h-8 text-gray-400 transform translate-x-4">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📁</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-['Manrope']">
                      Upload Data
                    </h3>
                    <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                      Upload your CSV or JSON files securely
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      2
                    </div>
                    
                    {/* Flow Arrow */}
                    <div className="hidden lg:block absolute top-10 right-0 w-8 h-8 text-gray-400 transform translate-x-4">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-['Manrope']">
                      AI Analysis
                    </h3>
                    <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                      AI scans for threats automatically
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      3
                    </div>
                    
                    {/* Flow Arrow */}
                    <div className="hidden lg:block absolute top-10 right-0 w-8 h-8 text-gray-400 transform translate-x-4">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-['Manrope']">
                      Get Results
                    </h3>
                    <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                      Receive detailed threat report
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      4
                    </div>
                    
                    {/* Flow Arrow */}
                    <div className="hidden lg:block absolute top-10 right-0 w-8 h-8 text-gray-400 transform translate-x-4">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-['Manrope']">
                      Auto Fix
                    </h3>
                    <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                      Clean data automatically
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      5
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-['Manrope']">
                      Download
                    </h3>
                    <p className="text-gray-600 font-['Manrope'] text-sm leading-relaxed">
                      Get your clean, secure data
                    </p>
                  </div>
                </div>
              </div>
            </div>

      
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main CTA Content */}
            <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 shadow-lg">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium mb-8 border border-gray-200">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Get Started Today
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-['Manrope'] leading-tight">
                Ready to Secure Your Data with QUASISHIELD?
              </h2>
              
              {/* Description */}
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 font-['Manrope'] leading-relaxed">
                Join thousands of organizations that trust our platform to protect their sensitive information. 
                Start your cybersecurity journey today with enterprise-grade protection.
              </p>
              
              {/* CTA Button */}
              <button
                onClick={handleGetStarted}
                className="px-12 py-5 bg-gray-900 text-white rounded-xl font-bold text-lg font-['Manrope'] hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">🚀</span>
                  Start Protecting Your Data
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
