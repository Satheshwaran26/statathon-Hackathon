import React, { useState } from 'react';

const LandingPage = ({ onGetStarted }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🛡️',
      title: 'Advanced Attack Detection',
      description: 'Utilize cutting-edge algorithms to identify cyber threats, privacy vulnerabilities, and data linkage risks in your datasets.',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: '💡',
      title: 'Intelligent Solutions',
      description: 'Get AI-powered recommendations for mitigating detected threats with implementation strategies and best practices.',
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: '🔧',
      title: 'Automated Rectification',
      description: 'Automatically clean and sanitize malicious data while preserving data utility and maintaining privacy standards.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: '📊',
      title: 'Comprehensive Reporting',
      description: 'Generate detailed security analysis reports with risk assessments, recommendations, and actionable next steps.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Upload Your Data',
      description: 'Securely upload your CSV or JSON datasets. Our system supports multiple file formats and handles large datasets efficiently.',
      icon: '📁',
      color: 'emerald'
    },
    {
      step: '02',
      title: 'Run Attack Simulation',
      description: 'Our advanced algorithms analyze your data for privacy vulnerabilities, re-identification risks, and cyber attack patterns.',
      icon: '🔍',
      color: 'orange'
    },
    {
      step: '03',
      title: 'Review Solutions',
      description: 'Get detailed recommendations for each detected threat, including implementation strategies and security best practices.',
      icon: '💡',
      color: 'emerald'
    },
    {
      step: '04',
      title: 'Data Rectification',
      description: 'Automatically clean and sanitize your data using industry-standard privacy protection techniques.',
      icon: '🔧',
      color: 'orange'
    },
    {
      step: '05',
      title: 'Generate Report',
      description: 'Create comprehensive security reports with risk assessments, compliance documentation, and actionable insights.',
      icon: '📊',
      color: 'emerald'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-orange-50 to-white">
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-2xl mb-12 shadow-lg">
              <span className="text-4xl text-white">🛡️</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 font-['Inter'] leading-tight">
              Cyber Attack
              <span className="block bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                Simulation & Fixer
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-['Inter'] leading-relaxed">
              Advanced cybersecurity tool for detecting, analyzing, and rectifying cyber attacks in datasets. 
              Protect your data with state-of-the-art privacy preservation techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={onGetStarted}
                className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-semibold text-lg font-['Inter'] hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md"
              >
                🚀 Get Started Now
              </button>
              <button className="px-12 py-4 bg-white text-gray-800 rounded-2xl font-semibold text-lg font-['Inter'] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md border border-emerald-200 hover:border-emerald-300">
                📖 Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-600 font-['Inter'] mb-1">99.9%</div>
                <div className="text-xs text-gray-600 font-['Inter']">Detection Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 font-['Inter'] mb-1">50+</div>
                <div className="text-xs text-gray-600 font-['Inter']">Attack Types</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-600 font-['Inter'] mb-1">24/7</div>
                <div className="text-xs text-gray-600 font-['Inter']">Monitoring</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 font-['Inter'] mb-1">100%</div>
                <div className="text-xs text-gray-600 font-['Inter']">Privacy Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Inter']">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Inter'] leading-relaxed">
              Comprehensive cybersecurity solution designed for modern data protection challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 shadow-md group-hover:shadow-lg ${
                  activeFeature === index 
                    ? `bg-gradient-to-r ${feature.color} text-white` 
                    : 'bg-gradient-to-r from-emerald-100 to-orange-100 text-gray-600'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-['Inter']">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-['Inter'] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-20 bg-gradient-to-br from-emerald-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Inter']">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Inter'] leading-relaxed">
              Simple, secure, and efficient process to protect your data from cyber threats
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-orange-500 to-emerald-500 transform -translate-y-1/2 hidden lg:block rounded-full"></div>
              
              <div className="grid lg:grid-cols-5 gap-8">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-${step.color}-500 relative z-10`}>
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className={`text-3xl font-bold text-${step.color}-600 mb-3 font-['Inter']`}>
                          {step.step}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 font-['Inter']">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 font-['Inter'] leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-['Inter']">
            Ready to Secure Your Data?
          </h2>
          <p className="text-lg text-emerald-100 max-w-3xl mx-auto mb-12 font-['Inter'] leading-relaxed">
            Join thousands of organizations that trust our platform to protect their sensitive information. 
            Start your cybersecurity journey today.
          </p>
          <button
            onClick={onGetStarted}
            className="px-16 py-4 bg-white text-emerald-600 rounded-2xl font-semibold text-lg font-['Inter'] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 Start Protecting Your Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
