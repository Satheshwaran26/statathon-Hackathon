import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportGeneration = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(true);
  const [generationStep, setGenerationStep] = useState('');
  const [reportSections, setReportSections] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    // Simulate report generation process
    const generationSteps = [
      'Initializing report engine...',
      'Compiling vulnerability data...',
      'Analyzing security measures...',
      'Calculating compliance metrics...',
      'Generating executive summary...',
      'Formatting detailed analysis...',
      'Finalizing report structure...',
      'Report ready!'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < generationSteps.length) {
        setGenerationStep(generationSteps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
        // Gradually reveal report sections
        revealReport();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const revealReport = () => {
    setShowReport(true);
    const sections = [
      'Executive Summary',
      'Vulnerabilities Detected',
      'Techniques Applied',
      'Privacy Metrics',
      'Compliance Status',
      'Recommendations'
    ];
    
    let currentSection = 0;
    const interval = setInterval(() => {
      if (currentSection < sections.length) {
        setReportSections(prev => [...prev, sections[currentSection]]);
        currentSection++;
      } else {
        clearInterval(interval);
        // Show action buttons after report reveal
        setTimeout(() => setShowActions(true), 500);
      }
    }, 400);
  };

  const handleDownloadReport = () => {
    const reportContent = `
QUASISHIELD SECURITY REPORT
Generated on: ${new Date().toLocaleDateString()}

EXECUTIVE SUMMARY
================
Your dataset has been successfully secured using advanced privacy-preserving techniques.
All identified vulnerabilities have been addressed, ensuring compliance with privacy regulations.

VULNERABILITIES DETECTED: 12
VULNERABILITIES RESOLVED: 12
PRIVACY COMPLIANCE: 100%

DETAILED ANALYSIS
=================
1. Low k-Anonymity - RESOLVED
   - Applied: Age generalization and city suppression
   - Result: Each combination now appears in multiple records

2. Poor l-Diversity - RESOLVED
   - Applied: Data swapping and synthetic data generation
   - Result: Disease attribute now has multiple values per group

3. High t-Closeness - RESOLVED
   - Applied: Synthetic data generation for sensitive attributes
   - Result: Income deviation reduced below threshold

4. High δ-Disclosure - RESOLVED
   - Applied: Suppression and pseudonymization
   - Result: Re-identification probability below 0.18

5. Attribute Disclosure - RESOLVED
   - Applied: Differential privacy noise addition
   - Result: Sensitive attribute correlations removed

6. Minimality Attack - RESOLVED
   - Applied: Partial value masking
   - Result: Reverse deduction prevented

7. Background Knowledge Attack - RESOLVED
   - Applied: Occupation category aggregation
   - Result: Exact name revelation prevented

8. Composition Attack - RESOLVED
   - Applied: Synthetic data and noise addition
   - Result: Public data composition attacks prevented

9. Deterministic Linkage - RESOLVED
   - Applied: Age and city generalization
   - Result: Exact matches eliminated

10. Probabilistic Linkage - RESOLVED
    - Applied: City name standardization
    - Result: Fuzzy linking prevented

11. ML-based Linkage - RESOLVED
    - Applied: Differential privacy and data swapping
    - Result: AI prediction accuracy reduced

12. Quasi-Identifier Risk - RESOLVED
    - Applied: Small population city generalization
    - Result: Single-person linking prevented

PRIVACY METRICS
===============
- k-Anonymity: k ≥ 5 (achieved)
- l-Diversity: l ≥ 3 (achieved)
- t-Closeness: t ≤ 0.2 (achieved)
- δ-Disclosure: δ ≤ 0.18 (achieved)

COMPLIANCE STATUS
=================
✓ GDPR Article 25 - Data Protection by Design
✓ CCPA Section 1798.100 - Consumer Rights
✓ HIPAA Privacy Rule - De-identification Standards
✓ ISO/IEC 27001 - Information Security Management

RECOMMENDATIONS
===============
1. Regular privacy audits every 6 months
2. Monitor for new attack vectors
3. Update anonymization techniques as needed
4. Maintain compliance documentation

This report certifies that your dataset meets all privacy and security requirements.
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quasishield-security-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Report Generation Animation */}
            <div className="mb-12">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <span className="text-6xl">📊</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Generating Security Report</h1>
              <p className="text-lg text-gray-600 mb-8">
                Compiling comprehensive security analysis and compliance documentation...
              </p>
            </div>

            {/* Progress Steps */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-gray-600 mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Step:</h3>
              <p className="text-lg text-gray-600 mb-6">{generationStep}</p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gray-600 h-3 rounded-full transition-all duration-1000 ease-out animate-pulse"></div>
              </div>
              
              {/* Report Icons */}
              <div className="flex justify-center space-x-4 mt-6">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-gray-600 text-sm">📊</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <span className="text-gray-600 text-sm">🔒</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
                  <span className="text-gray-600 text-sm">📋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6 border border-gray-200">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 animate-pulse"></span>
              Report Generation Complete
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Security Analysis Report</h1>
            <p className="text-lg text-gray-600">
              Comprehensive security assessment and privacy compliance report
            </p>
          </div>

          {/* Report Summary Cards with Animation */}
          {showReport && (
            <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">12</div>
                  <div className="text-sm text-gray-600">Vulnerabilities Found</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">12</div>
                  <div className="text-sm text-gray-600">Issues Resolved</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">100%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-2 animate-pulse">8</div>
                  <div className="text-sm text-gray-600">Techniques Applied</div>
                </div>
              </div>
            </div>
          )}

          {/* Report Preview with Progressive Reveal */}
          {showReport && (
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden mb-12 animate-fade-in">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Report Preview</h2>
                <p className="text-sm text-gray-600">
                  {reportSections.length} of 6 sections generated
                </p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  {reportSections.includes('Executive Summary') && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Executive Summary</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Your dataset has been successfully secured using advanced privacy-preserving techniques. 
                        All identified vulnerabilities have been addressed, ensuring compliance with privacy regulations 
                        including GDPR, HIPAA, CCPA, and ISO 27001.
                      </p>
                    </div>
                  )}
                  
                  {reportSections.includes('Vulnerabilities Detected') && reportSections.includes('Techniques Applied') && (
                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Vulnerabilities Detected</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Low k-Anonymity</li>
                          <li>• Poor l-Diversity</li>
                          <li>• High t-Closeness</li>
                          <li>• High δ-Disclosure</li>
                          <li>• Attribute Disclosure</li>
                          <li>• Minimality Attack</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Techniques Applied</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Differential Privacy</li>
                          <li>• Data Generalization</li>
                          <li>• Data Suppression</li>
                          <li>• Synthetic Generation</li>
                          <li>• Data Swapping</li>
                          <li>• Pseudonymization</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {reportSections.includes('Privacy Metrics') && (
                    <div className="animate-fade-in">
                      <h4 className="font-semibold text-gray-800 mb-2">Privacy Metrics Achieved</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                          <div className="text-lg font-bold text-gray-800 animate-pulse">k=5</div>
                          <div className="text-xs text-gray-600">k-Anonymity</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                          <div className="text-lg font-bold text-gray-700 animate-pulse">l=3</div>
                          <div className="text-xs text-gray-600">l-Diversity</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                          <div className="text-lg font-bold text-gray-600 animate-pulse">t=0.15</div>
                          <div className="text-xs text-gray-600">t-Closeness</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Compliance Status with Animation */}
          {showReport && reportSections.includes('Compliance Status') && (
            <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Compliance Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-gray-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">GDPR Compliant</h4>
                      <p className="text-sm text-gray-600">European data protection standards met</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                      <span className="text-gray-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">HIPAA Compliant</h4>
                      <p className="text-sm text-gray-600">Healthcare data privacy standards met</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
                      <span className="text-gray-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">CCPA Compliant</h4>
                      <p className="text-sm text-gray-600">California privacy standards met</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Security Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce">
                      <span className="text-gray-600 text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Regular Audits</h4>
                      <p className="text-sm text-gray-600">Conduct privacy audits every 6 months</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce" style={{ animationDelay: '0.2s' }}>
                      <span className="text-gray-600 text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Monitor Threats</h4>
                      <p className="text-sm text-gray-600">Stay updated on new attack vectors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce" style={{ animationDelay: '0.4s' }}>
                      <span className="text-gray-600 text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Staff Training</h4>
                      <p className="text-sm text-gray-600">Train team on privacy best practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons with Animation */}
          {showActions && (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownloadReport}
                  className="px-8 py-4 bg-gray-800 text-white rounded-xl text-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📥 Download Report
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Download the comprehensive security report for your records
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportGeneration;
