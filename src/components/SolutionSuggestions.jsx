import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SolutionSuggestions = () => {
  const navigate = useNavigate();
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isGenerating, setIsGenerating] = useState(true);
  const [generationStep, setGenerationStep] = useState('');
  const [solutionsRevealed, setSolutionsRevealed] = useState(0);
  const [showSolutions, setShowSolutions] = useState(false);

  // Solutions data from Methods.json
  const solutionsData = [
    {
      "Risk / Vulnerability": "Low k-Anonymity",
      "Technique / Method Applied": "Generalization of Age (e.g., 30–35) and Suppression of rare City entries"
    },
    {
      "Risk / Vulnerability": "Poor l-Diversity",
      "Technique / Method Applied": "Data Swapping of Disease values + Synthetic Data Generation for rare cases"
    },
    {
      "Risk / Vulnerability": "High t-Closeness",
      "Technique / Method Applied": "Synthetic Data Generation for sensitive attributes in small regions"
    },
    {
      "Risk / Vulnerability": "High δ-Disclosure",
      "Technique / Method Applied": "Suppression of rare Occupations + Pseudonymization of Job Titles"
    },
    {
      "Risk / Vulnerability": "Attribute Disclosure",
      "Technique / Method Applied": "Differential Privacy noise addition to sensitive columns"
    },
    {
      "Risk / Vulnerability": "Minimality Attack",
      "Technique / Method Applied": "Masking partial values to prevent reverse deduction"
    },
    {
      "Risk / Vulnerability": "Background Knowledge Attack",
      "Technique / Method Applied": "Aggregation of Occupation categories into broader groups"
    },
    {
      "Risk / Vulnerability": "Composition Attack",
      "Technique / Method Applied": "Synthetic Data Generation + Noise Addition in quasi-identifiers"
    },
    {
      "Risk / Vulnerability": "Deterministic Linkage",
      "Technique / Method Applied": "Generalization of Age + City Grouping (State level)"
    },
    {
      "Risk / Vulnerability": "Probabilistic Linkage",
      "Technique / Method Applied": "Standardization of City names before release"
    },
    {
      "Risk / Vulnerability": "ML-based Linkage",
      "Technique / Method Applied": "Differential Privacy on quasi-identifiers + Data Swapping"
    },
    {
      "Risk / Vulnerability": "Quasi-Identifier Risk",
      "Technique / Method Applied": "Generalization of small-population city data"
    }
  ];

  useEffect(() => {
    // Simulate solution generation process
    const generationSteps = [
      'Analyzing detected vulnerabilities...',
      'Consulting security databases...',
      'Generating solution recommendations...',
      'Optimizing for your data structure...',
      'Applying industry best practices...',
      'Finalizing security measures...',
      'Solutions ready!'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < generationSteps.length) {
        setGenerationStep(generationSteps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
        // Gradually reveal solutions
        revealSolutions();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const revealSolutions = () => {
    setShowSolutions(true);
    let revealed = 0;
    const interval = setInterval(() => {
      if (revealed < solutionsData.length) {
        setSolutionsRevealed(revealed + 1);
        revealed++;
      } else {
        clearInterval(interval);
      }
    }, 300);
  };

  useEffect(() => {
    // Simulate loading solutions
    setLoading(true);
    setTimeout(() => {
      setSolutions(solutionsData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleStartRectification = () => {
    navigate('/rectification');
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

  const getCategory = (vulnerability) => {
    if (vulnerability.includes('k-Anonymity') || vulnerability.includes('l-Diversity') || vulnerability.includes('t-Closeness')) {
      return 'anonymity';
    } else if (vulnerability.includes('Disclosure')) {
      return 'disclosure';
    } else if (vulnerability.includes('Attack') || vulnerability.includes('Linkage')) {
      return 'attacks';
    } else {
      return 'other';
    }
  };

  const categories = [
    { value: 'all', label: 'All Solutions' },
    { value: 'anonymity', label: 'Anonymity Techniques' },
    { value: 'disclosure', label: 'Disclosure Prevention' },
    { value: 'attacks', label: 'Attack Prevention' },
    { value: 'other', label: 'Other Methods' }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(s => getCategory(s["Risk / Vulnerability"]) === selectedCategory);

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Generation Animation */}
          <div className="mb-12">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <span className="text-6xl">💡</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Generating Security Solutions</h1>
            <p className="text-lg text-gray-600 mb-8">
              Analyzing vulnerabilities and creating tailored security recommendations...
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
            
            {/* Solution Icons */}
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
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6 border border-gray-200">
            <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 animate-pulse"></span>
            Solution Recommendations
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Security Solutions & Methods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on the detected vulnerabilities, here are the recommended techniques and methods 
            to secure your data and prevent cyber attacks.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
            <p className="mt-2 text-gray-600">Loading solutions...</p>
          </div>
        )}

        {/* Solutions Grid with Progressive Reveal */}
        {!loading && showSolutions && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSolutions.slice(0, solutionsRevealed).map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {solution["Risk / Vulnerability"]}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRiskColor(getRiskLevel(solution["Risk / Vulnerability"]))}`}>
                      {getRiskLevel(solution["Risk / Vulnerability"])}
                    </span>
                  </div>

                  {/* Solution Method */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Recommended Solution:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {solution["Technique / Method Applied"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredSolutions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No solutions found for the selected category.</p>
          </div>
        )}

        {/* Next Steps with Animation */}
        {!loading && showSolutions && (
          <div className="mt-8 text-center animate-fade-in">
            <div className="bg-gray-800 rounded-lg p-6 text-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Ready to Implement?</h3>
              <p className="mb-4 opacity-90">
                These solutions are designed to address the specific vulnerabilities detected in your data.
              </p>
              <button 
                onClick={handleStartRectification}
                className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Rectification Process
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionSuggestions;