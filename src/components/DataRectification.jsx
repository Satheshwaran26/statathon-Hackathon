import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DataRectification = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);
  const [rectificationStep, setRectificationStep] = useState('');
  const [dataRevealed, setDataRevealed] = useState(0);
  const [showData, setShowData] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const rectifiedData = [
    {
      "Age": "30–35",
      "Gender": "F",
      "City / Region": "Delhi NCR",
      "Income": "₹6,03,000",
      "Education": "Graduate",
      "Occupation": "Education Staff",
      "Disease": "Flu"
    },
    {
      "Age": "30–35",
      "Gender": "M",
      "City / Region": "Mumbai Metro",
      "Income": "₹7,16,400",
      "Education": "Postgraduate",
      "Occupation": "IT Professional",
      "Disease": "Diabetes"
    },
    {
      "Age": "25–30",
      "Gender": "F",
      "City / Region": "Chennai Zone",
      "Income": "₹5,52,750",
      "Education": "Graduate",
      "Occupation": "Medical Staff",
      "Disease": "Asthma"
    },
    {
      "Age": "45–50",
      "Gender": "M",
      "City / Region": "Kolkata Dist",
      "Income": "₹8,94,450",
      "Education": "Graduate",
      "Occupation": "Legal Advisor",
      "Disease": "Cancer"
    },
    {
      "Age": "35–40",
      "Gender": "F",
      "City / Region": "Delhi NCR",
      "Income": "₹6,37,800",
      "Education": "Postgraduate",
      "Occupation": "Analyst",
      "Disease": "Flu"
    },
    {
      "Age": "40–45",
      "Gender": "M",
      "City / Region": "Bengaluru",
      "Income": "₹9,14,550",
      "Education": "Graduate",
      "Occupation": "Manager",
      "Disease": "Diabetes"
    },
    {
      "Age": "35–40",
      "Gender": "M",
      "City / Region": "Pune Metro",
      "Income": "₹6,96,500",
      "Education": "Graduate",
      "Occupation": "Developer",
      "Disease": "Migraine"
    },
    {
      "Age": "25–30",
      "Gender": "F",
      "City / Region": "Hyderabad",
      "Income": "₹5,17,400",
      "Education": "Graduate",
      "Occupation": "Clerk",
      "Disease": "Asthma"
    },
    {
      "Age": "30–35",
      "Gender": "M",
      "City / Region": "Jaipur Zone",
      "Income": "₹6,83,400",
      "Education": "Graduate",
      "Occupation": "Accountant",
      "Disease": "Flu"
    },
    {
      "Age": "35–40",
      "Gender": "F",
      "City / Region": "Delhi NCR",
      "Income": "₹7,53,750",
      "Education": "Postgraduate",
      "Occupation": "Consultant",
      "Disease": "Cancer"
    },
    {
      "Age": "30–35",
      "Gender": "M",
      "City / Region": "Chennai Zone",
      "Income": "₹6,12,050",
      "Education": "Graduate",
      "Occupation": "Technician",
      "Disease": "Diabetes"
    },
    {
      "Age": "35–40",
      "Gender": "F",
      "City / Region": "Mumbai Metro",
      "Income": "₹8,16,900",
      "Education": "Graduate",
      "Occupation": "Designer",
      "Disease": "Migraine"
    },
    {
      "Age": "40–45",
      "Gender": "M",
      "City / Region": "Kolkata Dist",
      "Income": "₹9,54,750",
      "Education": "Postgraduate",
      "Occupation": "Director",
      "Disease": "Cancer"
    },
    {
      "Age": "25–30",
      "Gender": "F",
      "City / Region": "UP Central",
      "Income": "₹4,77,600",
      "Education": "Graduate",
      "Occupation": "Assistant",
      "Disease": "Flu"
    },
    {
      "Age": "40–45",
      "Gender": "M",
      "City / Region": "Bengaluru",
      "Income": "₹8,56,700",
      "Education": "Postgraduate",
      "Occupation": "Engineer",
      "Disease": "Diabetes"
    },
    {
      "Age": "40–45",
      "Gender": "F",
      "City / Region": "Pune Metro",
      "Income": "₹9,04,500",
      "Education": "Graduate",
      "Occupation": "Manager",
      "Disease": "Cancer"
    },
    {
      "Age": "30–35",
      "Gender": "M",
      "City / Region": "Hyderabad",
      "Income": "₹7,26,350",
      "Education": "Graduate",
      "Occupation": "Analyst",
      "Disease": "Migraine"
    },
    {
      "Age": "35–40",
      "Gender": "F",
      "City / Region": "Jaipur Zone",
      "Income": "₹6,93,450",
      "Education": "Graduate",
      "Occupation": "Officer",
      "Disease": "Asthma"
    },
    {
      "Age": "45–50",
      "Gender": "M",
      "City / Region": "Delhi NCR",
      "Income": "₹10,05,000",
      "Education": "Postgraduate",
      "Occupation": "Legal Advisor",
      "Disease": "Diabetes"
    },
    {
      "Age": "30–35",
      "Gender": "F",
      "City / Region": "Mumbai Metro",
      "Income": "₹6,43,150",
      "Education": "Graduate",
      "Occupation": "Medical Staff",
      "Disease": "Flu"
    },
    {
      "Age": "25–30",
      "Gender": "M",
      "City / Region": "Chennai Zone",
      "Income": "₹5,77,100",
      "Education": "Graduate",
      "Occupation": "Clerk",
      "Disease": "Migraine"
    },
    {
      "Age": "40–45",
      "Gender": "F",
      "City / Region": "Kolkata Dist",
      "Income": "₹8,73,650",
      "Education": "Postgraduate",
      "Occupation": "Director",
      "Disease": "Asthma"
    },
    {
      "Age": "35–40",
      "Gender": "M",
      "City / Region": "UP Central",
      "Income": "₹6,53,250",
      "Education": "Graduate",
      "Occupation": "Accountant",
      "Disease": "Cancer"
    },
    {
      "Age": "35–40",
      "Gender": "F",
      "City / Region": "Bengaluru",
      "Income": "₹7,56,050",
      "Education": "Graduate",
      "Occupation": "Engineer",
      "Disease": "Flu"
    },
    {
      "Age": "30–35",
      "Gender": "M",
      "City / Region": "Pune Metro",
      "Income": "₹7,36,300",
      "Education": "Graduate",
      "Occupation": "Technician",
      "Disease": "Diabetes"
    },
    {
      "Age": "40–45",
      "Gender": "F",
      "City / Region": "Hyderabad",
      "Income": "₹9,25,350",
      "Education": "Graduate",
      "Occupation": "Consultant",
      "Disease": "Migraine"
    },
    {
      "Age": "25–30",
      "Gender": "M",
      "City / Region": "Jaipur Zone",
      "Income": "₹5,12,550",
      "Education": "Graduate",
      "Occupation": "Developer",
      "Disease": "Asthma"
    },
    {
      "Age": "30–35",
      "Gender": "F",
      "City / Region": "Delhi NCR",
      "Income": "₹6,93,450",
      "Education": "Graduate",
      "Occupation": "Officer",
      "Disease": "Flu"
    },
    {
      "Age": "35–40",
      "Gender": "M",
      "City / Region": "Mumbai Metro",
      "Income": "₹8,53,750",
      "Education": "Postgraduate",
      "Occupation": "Analyst",
      "Disease": "Cancer"
    },
    {
      "Age": "25–30",
      "Gender": "F",
      "City / Region": "Chennai Zone",
      "Income": "₹5,42,250",
      "Education": "Graduate",
      "Occupation": "Clerk",
      "Disease": "Asthma"
    },
    {
      "Age": "45–50",
      "Gender": "M",
      "City / Region": "Kolkata Dist",
      "Income": "₹9,55,250",
      "Education": "Graduate",
      "Occupation": "Lawyer",
      "Disease": "Diabetes"
    },
    {
      "Age": "40–45",
      "Gender": "F",
      "City / Region": "UP Central",
      "Income": "₹8,13,800",
      "Education": "Postgraduate",
      "Occupation": "Manager",
      "Disease": "Flu"
    },
    {
      "Age": "35–40",
      "Gender": "M",
      "City / Region": "Bengaluru",
      "Income": "₹7,93,050",
      "Education": "Graduate",
      "Occupation": "Engineer",
      "Disease": "Cancer"
    },
    {
      "Age": "30–35",
      "Gender": "F",
      "City / Region": "Pune Metro",
      "Income": "₹7,33,150",
      "Education": "Graduate",
      "Occupation": "Accountant",
      "Disease": "Migraine"
    },
    {
      "Age": "30–35",
      "Gender": "M",
      "City / Region": "Hyderabad",
      "Income": "₹6,67,450",
      "Education": "Graduate",
      "Occupation": "Developer",
      "Disease": "Asthma"
    },
    {
      "Age": "35–40",
      "Gender": "F",
      "City / Region": "Jaipur Zone",
      "Income": "₹7,12,750",
      "Education": "Postgraduate",
      "Occupation": "Technician",
      "Disease": "Diabetes"
    },
    {
      "Age": "40–45",
      "Gender": "M",
      "City / Region": "Delhi NCR",
      "Income": "₹9,07,450",
      "Education": "Graduate",
      "Occupation": "Director",
      "Disease": "Flu"
    },
    {
      "Age": "25–30",
      "Gender": "F",
      "City / Region": "Mumbai Metro",
      "Income": "₹5,87,250",
      "Education": "Graduate",
      "Occupation": "Assistant",
      "Disease": "Cancer"
    },
    {
      "Age": "35–40",
      "Gender": "M",
      "City / Region": "Chennai Zone",
      "Income": "₹7,76,550",
      "Education": "Postgraduate",
      "Occupation": "Lawyer",
      "Disease": "Migraine"
    },
    {
      "Age": "45–50",
      "Gender": "F",
      "City / Region": "Kolkata Dist",
      "Income": "₹10,34,150",
      "Education": "Graduate",
      "Occupation": "Consultant",
      "Disease": "Asthma"
    }
  ];

  useEffect(() => {
    // Simulate rectification process
    const rectificationSteps = [
      'Initializing data rectification engine...',
      'Applying k-anonymity algorithms...',
      'Implementing l-diversity measures...',
      'Adding differential privacy noise...',
      'Generalizing quasi-identifiers...',
      'Suppressing rare values...',
      'Generating synthetic data...',
      'Validating privacy compliance...',
      'Rectification complete!'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < rectificationSteps.length) {
        setRectificationStep(rectificationSteps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        // Gradually reveal data
        revealData();
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Ensure current page stays within available pages as data reveals
    const pageSize = 10;
    const availableCount = Math.min(40, dataRevealed);
    const totalPages = Math.max(1, Math.ceil(availableCount / pageSize));
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [dataRevealed, currentPage]);

  const revealData = () => {
    setShowData(true);
    let revealed = 0;
    const interval = setInterval(() => {
      if (revealed < Math.min(40, rectifiedData.length)) {
        setDataRevealed(revealed + 1);
        revealed++;
      } else {
        clearInterval(interval);
        // Show summary after data reveal
        setTimeout(() => setShowSummary(true), 500);
      }
    }, 200);
  };

  const handleDownload = () => {
    const csvContent = [
      Object.keys(rectifiedData[0]).join(','),
      ...rectifiedData.map(row => Object.values(row).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rectified_data_123.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleGenerateReport = () => {
    navigate('/report');
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Rectification Animation */}
            <div className="mb-12">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <span className="text-6xl">🔧</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Data Rectification in Progress</h1>
              <p className="text-lg text-gray-600 mb-8">
                Applying advanced privacy-preserving techniques to secure your data...
              </p>
            </div>

            {/* Progress Steps */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-gray-600 mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Step:</h3>
              <p className="text-lg text-gray-600 mb-6">{rectificationStep}</p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-gray-600 h-3 rounded-full transition-all duration-1000 ease-out animate-pulse"></div>
              </div>
              
              {/* Security Icons */}
              <div className="flex justify-center space-x-4 mt-6">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-gray-600 text-sm">🔒</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <span className="text-gray-600 text-sm">🛡️</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
                  <span className="text-gray-600 text-sm">⚡</span>
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6 border border-gray-200">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 animate-pulse"></span>
              Data Rectification Complete
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Data Has Been Secured</h1>
            <p className="text-lg text-gray-600">
              All vulnerabilities have been addressed and your data is now privacy-compliant
            </p>
          </div>

          {/* Summary Cards with Animation */}
      

          {/* Data Preview with Progressive Reveal */}
          {showData && (
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden mb-12 animate-fade-in">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Rectified Data Preview</h2>
                <p className="text-sm text-gray-600">
                  Showing {dataRevealed} of {rectifiedData.length} records of your secured dataset
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        City / Region
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Income
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Education
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Occupation
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Disease
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {(() => {
                      const pageSize = 10;
                      const availableCount = Math.min(40, dataRevealed);
                      const startIndex = (currentPage - 1) * pageSize;
                      const endIndex = Math.min(startIndex + pageSize, availableCount);
                      return rectifiedData.slice(0, availableCount).slice(startIndex, endIndex).map((row, index) => (
                        <tr key={`${startIndex + index}`} className="hover:bg-gray-50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Age}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Gender}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row["City / Region"]}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Income}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Education}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Occupation}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Disease}</td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-between">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border ${currentPage === 1 ? 'text-gray-400 border-gray-200 cursor-not-allowed' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setCurrentPage(num)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold border ${currentPage === num ? 'bg-gray-800 text-white border-gray-800' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
                  disabled={currentPage === 4}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border ${currentPage === 4 ? 'text-gray-400 border-gray-200 cursor-not-allowed' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

        

          {/* Action Buttons with Animation */}
          {showSummary && (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="px-8 py-4 bg-gray-700 text-white rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📥 Download Rectified Data
                </button>
                <button
                  onClick={handleGenerateReport}
                  className="px-8 py-4 bg-gray-800 text-white rounded-xl text-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📊 Generate Security Report
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Download your secured data or generate a comprehensive security report
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataRectification;
