import React, { useState } from 'react';

const AttackSimulation = ({ dataFile1, dataFile2, onAttackSimulation, detectedAttacks }) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [localDetectedAttacks, setLocalDetectedAttacks] = useState([]);
  const [simulationComplete, setIsSimulationComplete] = useState(false);

  // Mock attack detection function using Risks.json data
  const simulateAttackDetection = () => {
    setIsSimulating(true);
    
    // Simulate processing time
    setTimeout(() => {
      const mockAttacks = [
        {
          id: 1,
          name: 'Low k-Anonymity',
          severity: 'High',
          description: 'Age + Gender + City unique for 22% records',
          timestamp: new Date().toISOString(),
          affectedRecords: 156,
          confidence: 95
        },
        {
          id: 2,
          name: 'Poor l-Diversity',
          severity: 'Medium',
          description: 'Disease attribute has only 1 value in 6 groups',
          timestamp: new Date().toISOString(),
          affectedRecords: 89,
          confidence: 87
        },
        {
          id: 3,
          name: 'High t-Closeness',
          severity: 'Critical',
          description: 'Income deviation in Delhi is 0.35 (threshold 0.2)',
          timestamp: new Date().toISOString(),
          affectedRecords: 234,
          confidence: 92
        },
        {
          id: 4,
          name: 'High δ-Disclosure',
          severity: 'High',
          description: 'Re-ID probability exceeds 0.18 for rare occupations',
          timestamp: new Date().toISOString(),
          affectedRecords: 67,
          confidence: 78
        },
        {
          id: 5,
          name: 'Attribute Disclosure',
          severity: 'Critical',
          description: '"Director" often linked with Cancer or Asthma',
          timestamp: new Date().toISOString(),
          affectedRecords: 45,
          confidence: 96
        },
        {
          id: 6,
          name: 'Minimality Attack',
          severity: 'Medium',
          description: 'Suppression patterns reveal original values in 14 records',
          timestamp: new Date().toISOString(),
          affectedRecords: 23,
          confidence: 82
        },
        {
          id: 7,
          name: 'Background Knowledge Attack',
          severity: 'High',
          description: 'Occupation + City reveals exact Name in ground truth',
          timestamp: new Date().toISOString(),
          affectedRecords: 34,
          confidence: 89
        },
        {
          id: 8,
          name: 'Deterministic Linkage',
          severity: 'Critical',
          description: 'Exact Age + Gender + City match in both datasets',
          timestamp: new Date().toISOString(),
          affectedRecords: 78,
          confidence: 94
        }
      ];

      setLocalDetectedAttacks(mockAttacks);
      setIsSimulating(false);
      setIsSimulationComplete(true);
    }, 3000);
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-red-600 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-black';
      case 'low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Use local attacks if available, otherwise use prop
  const attacksToShow = localDetectedAttacks.length > 0 ? localDetectedAttacks : detectedAttacks;

  return (
    <div className="modern-card rounded-3xl p-12 mb-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <span className="text-3xl text-white">🔍</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Raleway']">Attack Simulation</h2>
        <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
          Analyzing datasets for cyber attack patterns and vulnerabilities
        </p>
      </div>

      {/* File Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 font-['Raleway']">Dataset 1</h3>
          <p className="text-gray-700 font-medium font-['Manrope'] text-lg">{dataFile1?.name || 'No file uploaded'}</p>
          <p className="text-sm text-gray-600 font-['Manrope'] mt-2">
            Size: {dataFile1 ? `${(dataFile1.size / 1024 / 1024).toFixed(2)} MB` : 'N/A'}
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 shadow-lg">
          <h3 className="text-xl font-semibold text-green-600 mb-4 font-['Raleway']">Dataset 2</h3>
          <p className="text-gray-700 font-medium font-['Manrope'] text-lg">{dataFile2?.name || 'No file uploaded'}</p>
          <p className="text-sm text-gray-600 font-['Manrope'] mt-2">
            Size: {dataFile2 ? `${(dataFile2.size / 1024 / 1024).toFixed(2)} MB` : 'N/A'}
          </p>
        </div>
      </div>

      {/* Simulation Button */}
      {!simulationComplete && (
        <div className="text-center mb-12">
          <button
            onClick={simulateAttackDetection}
            disabled={isSimulating}
            className={`px-12 py-5 rounded-2xl font-semibold transition-all duration-300 transform text-xl font-['Manrope'] ${
              isSimulating
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'modern-btn hover:scale-105'
            }`}
          >
            {isSimulating ? (
              <div className="flex items-center space-x-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Analyzing Datasets...</span>
              </div>
            ) : (
              '🚨 Run Attack Simulation'
            )}
          </button>
        </div>
      )}

      {/* Simulation Progress */}
      {isSimulating && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 mb-12 border border-gray-200 shadow-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-500 mx-auto mb-8"></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-['Raleway']">Simulating Cyber Attack Detection</h3>
            <div className="space-y-4 text-gray-600 font-['Manrope'] text-lg">
              <p>🔍 Scanning for privacy vulnerabilities...</p>
              <p>🛡️ Checking for data linkage risks...</p>
              <p>📊 Analyzing anonymization patterns...</p>
              <p>🔐 Monitoring disclosure risks...</p>
              <p>🦠 Detecting re-identification threats...</p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {simulationComplete && attacksToShow.length > 0 && (
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-['Raleway']">🚨 Attack Detection Results</h3>
            <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
              {attacksToShow.length} cyber attacks detected in your datasets
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center border border-red-200 shadow-lg">
              <div className="text-4xl font-bold text-red-600 font-['Raleway']">{attacksToShow.filter(a => a.severity === 'Critical').length}</div>
              <div className="text-sm text-red-700 font-medium font-['Manrope']">Critical</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center border border-orange-200 shadow-lg">
              <div className="text-4xl font-bold text-orange-600 font-['Raleway']">{attacksToShow.filter(a => a.severity === 'High').length}</div>
              <div className="text-sm text-orange-700 font-medium font-['Manrope']">High</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center border border-yellow-200 shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 font-['Raleway']">{attacksToShow.filter(a => a.severity === 'Medium').length}</div>
              <div className="text-sm text-yellow-700 font-medium font-['Manrope']">Medium</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200 shadow-lg">
              <div className="text-4xl font-bold text-green-600 font-['Raleway']">{attacksToShow.filter(a => a.severity === 'Low').length}</div>
              <div className="text-sm text-green-700 font-medium font-['Manrope']">Low</div>
            </div>
          </div>

          {/* Attacks Table */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Attack</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Severity</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Description</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Records</th>
                    <th className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider font-['Raleway']">Confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {attacksToShow.map((attack) => (
                    <tr key={attack.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6">
                        <div>
                          <div className="text-sm font-medium text-gray-800 font-['Manrope']">{attack.name}</div>
                          <div className="text-xs text-gray-500 font-['Manrope']">{new Date(attack.timestamp).toLocaleString()}</div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded-full ${getSeverityColor(attack.severity)}`}>
                          {attack.severity}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm text-gray-700 max-w-xs font-['Manrope']">{attack.description}</div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm text-gray-600 font-medium font-['Manrope']">{attack.affectedRecords}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-sm font-medium ${getConfidenceColor(attack.confidence)} font-['Manrope']`}>
                          {attack.confidence}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="text-center">
            <button
              onClick={() => onAttackSimulation(attacksToShow)}
              className="modern-btn px-12 py-5 text-xl font-['Manrope'] hover:scale-105"
            >
              💡 Get Solution Suggestions
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttackSimulation;
