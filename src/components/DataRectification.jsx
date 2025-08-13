import React, { useState } from 'react';

const DataRectification = ({ detectedAttacks, solutions, onDataRectification, rectifiedData }) => {
  const [isRectifying, setIsRectifying] = useState(false);
  const [localRectifiedData, setLocalRectifiedData] = useState([]);
  const [rectificationComplete, setIsRectificationComplete] = useState(false);

  // Mock data rectification function using Rectified.json data
  const startRectification = () => {
    setIsRectifying(true);
    
    // Simulate processing time
    setTimeout(() => {
      const mockRectifiedData = [
        {
          id: 1,
          originalValue: "'; DROP TABLE users; --",
          rectifiedValue: "DROP TABLE users",
          attackType: "SQL Injection",
          status: "Cleaned",
          confidence: 98
        },
        {
          id: 2,
          originalValue: "<script>alert('XSS')</script>",
          rectifiedValue: "alert XSS",
          attackType: "XSS",
          status: "Sanitized",
          confidence: 95
        },
        {
          id: 3,
          originalValue: "admin';--",
          rectifiedValue: "admin",
          attackType: "SQL Injection",
          status: "Cleaned",
          confidence: 97
        },
        {
          id: 4,
          originalValue: "javascript:alert('XSS')",
          rectifiedValue: "alert XSS",
          attackType: "XSS",
          status: "Sanitized",
          confidence: 94
        },
        {
          id: 5,
          originalValue: "1' OR '1'='1",
          rectifiedValue: "1 OR 1=1",
          attackType: "SQL Injection",
          status: "Cleaned",
          confidence: 96
        },
        {
          id: 6,
          originalValue: "<img src=x onerror=alert('XSS')>",
          rectifiedValue: "img src=x onerror=alert XSS",
          attackType: "XSS",
          status: "Sanitized",
          confidence: 93
        },
        {
          id: 7,
          originalValue: "'; INSERT INTO users VALUES ('hacker', 'password'); --",
          rectifiedValue: "INSERT INTO users VALUES hacker password",
          attackType: "SQL Injection",
          status: "Cleaned",
          confidence: 99
        },
        {
          id: 8,
          originalValue: "eval('alert(\"XSS\")')",
          rectifiedValue: "alert XSS",
          attackType: "XSS",
          status: "Sanitized",
          confidence: 92
        }
      ];

      setLocalRectifiedData(mockRectifiedData);
      setIsRectifying(false);
      setIsRectificationComplete(true);
    }, 4000);
  };

  const downloadRectifiedData = () => {
    const dataToDownload = localRectifiedData.length > 0 ? localRectifiedData : rectifiedData;
    if (dataToDownload.length === 0) return;

    // Convert to CSV format
    const headers = ['ID', 'Original Value', 'Rectified Value', 'Attack Type', 'Status', 'Confidence'];
    const csvContent = [
      headers.join(','),
      ...dataToDownload.map(row => [
        row.id,
        `"${row.originalValue}"`,
        `"${row.rectifiedValue}"`,
        row.attackType,
        row.status,
        row.confidence
      ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'rectified_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'cleaned':
        return 'bg-green-500 text-white';
      case 'sanitized':
        return 'bg-blue-500 text-white';
      case 'flagged':
        return 'bg-yellow-500 text-black';
      case 'removed':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 95) return 'text-green-600';
    if (confidence >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Use local rectified data if available, otherwise use prop
  const dataToShow = localRectifiedData.length > 0 ? localRectifiedData : rectifiedData;

  return (
    <div className="modern-card rounded-3xl p-12 mb-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <span className="text-3xl text-white">🔧</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Raleway']">Data Rectification</h2>
        <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
          Clean and sanitize detected malicious data using recommended security solutions
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-200 shadow-lg">
          <div className="text-4xl font-bold text-blue-600 font-['Raleway']">{detectedAttacks.length}</div>
          <div className="text-sm text-blue-700 font-medium font-['Manrope']">Attacks Detected</div>
        </div>
        <div className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-200 shadow-lg">
          <div className="text-4xl font-bold text-purple-600 font-['Raleway']">{solutions.length}</div>
          <div className="text-sm text-purple-700 font-medium font-['Manrope']">Solutions Applied</div>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200 shadow-lg">
          <div className="text-4xl font-bold text-green-600 font-['Raleway']">
            {dataToShow.length > 0 ? dataToShow.length : '0'}
          </div>
          <div className="text-sm text-green-700 font-medium font-['Manrope']">Records Processed</div>
        </div>
        <div className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-200 shadow-lg">
          <div className="text-4xl font-bold text-orange-600 font-['Raleway']">
            {dataToShow.length > 0 ? Math.round(dataToShow.reduce((acc, item) => acc + item.confidence, 0) / dataToShow.length) : '0'}%
          </div>
          <div className="text-sm text-orange-700 font-medium font-['Manrope']">Avg Confidence</div>
        </div>
      </div>

      {/* Start Rectification Button */}
      {!rectificationComplete && (
        <div className="text-center mb-12">
          <button
            onClick={startRectification}
            disabled={isRectifying}
            className={`px-12 py-5 rounded-2xl font-semibold transition-all duration-300 transform text-xl font-['Manrope'] ${
              isRectifying
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'modern-btn hover:scale-105'
            }`}
          >
            {isRectifying ? (
              <div className="flex items-center space-x-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Rectifying Data...</span>
              </div>
            ) : (
              '🔧 Start Rectifying Data'
            )}
          </button>
        </div>
      )}

      {/* Rectification Progress */}
      {isRectifying && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 mb-12 border border-gray-200 shadow-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-purple-500 mx-auto mb-8"></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-['Raleway']">Data Rectification in Progress</h3>
            <div className="space-y-4 text-gray-600 font-['Manrope'] text-lg">
              <p>🧹 Cleaning SQL injection patterns...</p>
              <p>🛡️ Sanitizing XSS payloads...</p>
              <p>🔍 Removing malicious code...</p>
              <p>✅ Validating cleaned data...</p>
              <p>📊 Generating rectification report...</p>
            </div>
          </div>
        </div>
      )}

      {/* Rectified Data Display */}
      {rectificationComplete && dataToShow.length > 0 && (
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-['Raleway']">✅ Data Rectification Complete</h3>
            <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
              Successfully processed {dataToShow.length} records with security measures
            </p>
          </div>

          {/* Rectified Data Table */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">ID</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Original Value</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Rectified Value</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Attack Type</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Status</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dataToShow.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6">
                        <span className="text-sm text-gray-600 font-medium font-['Manrope']">{record.id}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="max-w-xs">
                          <div className="text-sm text-red-600 font-mono break-all bg-red-50 p-2 rounded border border-red-200 font-['JetBrains Mono']">{record.originalValue}</div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="max-w-xs">
                          <div className="text-sm text-green-600 font-mono break-all bg-green-50 p-2 rounded border border-green-200 font-['JetBrains Mono']">{record.rectifiedValue}</div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm text-gray-700 font-medium font-['Manrope']">{record.attackType}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(record.status)} font-['Manrope']`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-sm font-medium ${getConfidenceColor(record.confidence)} font-['Manrope']`}>
                          {record.confidence}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={downloadRectifiedData}
              className="px-12 py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xl font-['Manrope']"
            >
              📥 Download Rectified Data (CSV)
            </button>
            <button
              onClick={() => onDataRectification(dataToShow)}
              className="modern-btn px-12 py-5 text-xl font-['Manrope'] hover:scale-105"
            >
              📊 Generate Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataRectification;
