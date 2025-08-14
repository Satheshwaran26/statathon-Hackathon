import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AttackSimulation = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysisStep, setAnalysisStep] = useState('');
  const [vulnerabilitiesRevealed, setVulnerabilitiesRevealed] = useState(0);
  const [showVulnerabilities, setShowVulnerabilities] = useState(false);

  const vulnerabilityData = [
    {
      "Risk / Vulnerability": "Low k-Anonymity",
      "Description": "Age + Gender + City unique for 22% records"
    },
    {
      "Risk / Vulnerability": "Poor l-Diversity",
      "Description": "Disease attribute has only 1 value in 6 groups"
    },
    {
      "Risk / Vulnerability": "High t-Closeness",
      "Description": "Income deviation in Delhi is 0.35 (threshold 0.2)"
    },
    {
      "Risk / Vulnerability": "High δ-Disclosure",
      "Description": "Re-ID probability exceeds 0.18 for rare occupations"
    },
    {
      "Risk / Vulnerability": "Attribute Disclosure",
      "Description": "\"Director\" often linked with Cancer or Asthma"
    },
    {
      "Risk / Vulnerability": "Minimality Attack",
      "Description": "Suppression patterns reveal original values in 14 records"
    },
    {
      "Risk / Vulnerability": "Background Knowledge Attack",
      "Description": "Occupation + City reveals exact Name in ground truth"
    },
    {
      "Risk / Vulnerability": "Composition Attack",
      "Description": "Public salary data matches 19 individuals"
    },
    {
      "Risk / Vulnerability": "Deterministic Linkage",
      "Description": "Exact Age + Gender + City match in both datasets"
    },
    {
      "Risk / Vulnerability": "Probabilistic Linkage",
      "Description": "\"Bengaluru\" matches \"Bangalore\" via fuzzy linking"
    },
    {
      "Risk / Vulnerability": "ML-based Linkage",
      "Description": "AI model predicts matches with 88% accuracy"
    },
    {
      "Risk / Vulnerability": "Quasi-Identifier Risk",
      "Description": "Age + City links to single person in small cities"
    }
  ];

  useEffect(() => {
    // Simulate attack analysis process
    const analysisSteps = [
      'Initializing attack simulation engine...',
      'Loading vulnerability databases...',
      'Analyzing data patterns...',
      'Detecting privacy violations...',
      'Identifying attack vectors...',
      'Calculating risk scores...',
      'Generating vulnerability report...',
      'Analysis complete!'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < analysisSteps.length) {
        setAnalysisStep(analysisSteps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsAnalyzing(false);
        // Gradually reveal vulnerabilities
        revealVulnerabilities();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const revealVulnerabilities = () => {
    setShowVulnerabilities(true);
    let revealed = 0;
    const interval = setInterval(() => {
      if (revealed < vulnerabilityData.length) {
        setVulnerabilitiesRevealed(revealed + 1);
        revealed++;
      } else {
        clearInterval(interval);
      }
    }, 200);
  };

  const handleGetSolution = () => {
    navigate('/solutions');
  };

  const getRiskLevel = (vulnerability) => {
    if (vulnerability.includes('High')) return 'high';
    if (vulnerability.includes('Low')) return 'low';
    if (vulnerability.includes('Poor')) return 'medium';
    return 'medium';
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'high':
        return 'bg-gray-800 text-white border-gray-700';
      case 'medium':
        return 'bg-gray-600 text-white border-gray-500';
      case 'low':
        return 'bg-gray-400 text-white border-gray-300';
      default:
        return 'bg-gray-500 text-white border-gray-400';
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Analysis Animation */}
            <div className="mb-12">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <span className="text-6xl">🔍</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Attack Simulation in Progress</h1>
              <p className="text-lg text-gray-600 mb-8">
                Analyzing your data for potential security vulnerabilities...
              </p>
            </div>

            {/* Progress Steps */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-gray-600 mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Step:</h3>
              <p className="text-lg text-gray-600 mb-6">{analysisStep}</p>
              
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6 border border-gray-200">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 animate-pulse"></span>
              Attack Simulation Results
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Cyber Attack Vulnerability Analysis</h1>
            <p className="text-lg text-gray-600">
              Analysis complete! We've identified several security vulnerabilities in your data
            </p>
          </div>


          {/* Vulnerability Table with Progressive Reveal */}
          {showVulnerabilities && (
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden mb-12">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Detected Vulnerabilities</h2>
                <p className="text-sm text-gray-600">
                  {vulnerabilitiesRevealed} of {vulnerabilityData.length} vulnerabilities analyzed
                </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vulnerability Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {vulnerabilityData.slice(0, vulnerabilitiesRevealed).map((item, index) => {
                    const riskLevel = getRiskLevel(item["Risk / Vulnerability"]);
                    const riskColor = getRiskColor(riskLevel);
                    
                    return (
                        <tr key={index} className="hover:bg-gray-50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${riskColor}`}>
                            {riskLevel.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item["Risk / Vulnerability"]}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.Description}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          )}

          {/* Risk Distribution Chart */}
          {showVulnerabilities && vulnerabilitiesRevealed === vulnerabilityData.length && (
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Risk Distribution</h3>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <span className="text-3xl text-gray-800">🔴</span>
                </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">2</div>
                <div className="text-sm text-gray-600">High Risk Vulnerabilities</div>
                <div className="text-xs text-gray-500 mt-1">Immediate attention required</div>
              </div>
              
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <span className="text-3xl text-gray-700">🟡</span>
                </div>
                  <div className="text-2xl font-bold text-gray-700 mb-2">7</div>
                <div className="text-sm text-gray-600">Medium Risk Vulnerabilities</div>
                <div className="text-xs text-gray-500 mt-1">Address within 24 hours</div>
              </div>
              
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '0.4s' }}>
                    <span className="text-3xl text-gray-600">🟢</span>
                </div>
                  <div className="text-2xl font-bold text-gray-600 mb-2">1</div>
                <div className="text-sm text-gray-600">Low Risk Vulnerabilities</div>
                <div className="text-xs text-gray-500 mt-1">Monitor and review</div>
              </div>
            </div>
          </div>
          )}

          {/* Action Button */}
          {showVulnerabilities && vulnerabilitiesRevealed === vulnerabilityData.length && (
            <div className="text-center animate-fade-in">
            <button
              onClick={handleGetSolution}
                className="px-12 py-4 bg-gray-800 text-white rounded-xl text-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              💡 Get Solution & Recommendations
            </button>
            <p className="text-sm text-gray-500 mt-3">
              We'll provide detailed solutions for each vulnerability detected
            </p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttackSimulation;
