import React, { useState } from 'react';

const SolutionSuggestions = ({ detectedAttacks, onSolutionSuggestions, solutions }) => {
  const [localSolutions, setLocalSolutions] = useState([]);
  const [solutionsGenerated, setSolutionsGenerated] = useState(false);

  // Mock solutions for each attack type
  const generateSolutions = () => {
    const mockSolutions = [
      {
        id: 1,
        attackId: 1,
        attackName: 'Low k-Anonymity',
        title: 'Implement k-Anonymity Algorithm',
        description: 'Apply k-anonymity techniques to ensure each equivalence class contains at least k records.',
        implementation: 'Use generalization and suppression techniques to reduce the uniqueness of quasi-identifiers. Implement algorithms like Mondrian or Datafly.',
        priority: 'High',
        estimatedTime: '4-6 hours',
        difficulty: 'Medium',
        tools: ['ARX Data Anonymization', 'Python Anonymization Libraries', 'R Statistical Packages'],
        codeExample: '// Apply k-anonymity\nconst kAnonymizer = new KAnonymizer({\n  k: 5,\n  quasiIdentifiers: ["age", "gender", "city"]\n});\nconst anonymizedData = kAnonymizer.anonymize(dataset);'
      },
      {
        id: 2,
        attackId: 1,
        attackName: 'Low k-Anonymity',
        title: 'Quasi-Identifier Generalization',
        description: 'Generalize quasi-identifiers to reduce uniqueness while preserving data utility.',
        implementation: 'Create hierarchical generalizations for age groups, city regions, and other quasi-identifiers.',
        priority: 'High',
        estimatedTime: '3-5 hours',
        difficulty: 'Medium',
        tools: ['Generalization Algorithms', 'Hierarchical Taxonomies', 'Data Utility Metrics'],
        codeExample: '// Generalize age groups\nconst ageGroups = {\n  "18-25": "18-30",\n  "26-35": "18-30",\n  "36-45": "31-50"\n};'
      },
      {
        id: 3,
        attackId: 2,
        attackName: 'Poor l-Diversity',
        title: 'Implement l-Diversity Algorithm',
        description: 'Ensure each equivalence class has at least l different values for sensitive attributes.',
        implementation: 'Apply l-diversity techniques after k-anonymity to protect sensitive attribute values.',
        priority: 'Medium',
        estimatedTime: '5-7 hours',
        difficulty: 'High',
        tools: ['l-Diversity Algorithms', 'Sensitive Attribute Protection', 'Data Utility Analysis'],
        codeExample: '// Apply l-diversity\nconst lDiversifier = new LDiversifier({\n  l: 3,\n  sensitiveAttributes: ["disease"]\n});\nconst diverseData = lDiversifier.diversify(anonymizedData);'
      },
      {
        id: 4,
        attackId: 2,
        attackName: 'Poor l-Diversity',
        title: 'Sensitive Attribute Protection',
        description: 'Protect sensitive attributes by ensuring diversity in equivalence classes.',
        implementation: 'Use techniques like entropy l-diversity or recursive (c,l)-diversity to protect sensitive information.',
        priority: 'Medium',
        estimatedTime: '4-6 hours',
        difficulty: 'Medium',
        tools: ['Entropy Calculations', 'Diversity Metrics', 'Privacy Protection Tools'],
        codeExample: '// Calculate entropy l-diversity\nconst entropy = calculateEntropy(equivalenceClass);\nif (entropy < threshold) {\n  applyDiversification(equivalenceClass);\n}'
      },
      {
        id: 5,
        attackId: 3,
        name: 'High t-Closeness',
        title: 'Implement t-Closeness Algorithm',
        description: 'Ensure the distribution of sensitive attributes in each equivalence class is close to the overall distribution.',
        implementation: 'Apply t-closeness techniques to maintain statistical properties while protecting privacy.',
        priority: 'Critical',
        estimatedTime: '6-8 hours',
        difficulty: 'High',
        tools: ['t-Closeness Algorithms', 'Statistical Analysis', 'Distribution Metrics'],
        codeExample: '// Apply t-closeness\nconst tCloseness = new TCloseness({\n  threshold: 0.2,\n  sensitiveAttributes: ["income"]\n});\nconst protectedData = tCloseness.protect(diverseData);'
      },
      {
        id: 6,
        attackId: 4,
        name: 'High δ-Disclosure',
        title: 'Reduce Re-Identification Probability',
        description: 'Implement techniques to reduce the probability of re-identification below acceptable thresholds.',
        implementation: 'Use advanced anonymization techniques and risk assessment models to minimize disclosure risk.',
        priority: 'High',
        estimatedTime: '5-7 hours',
        difficulty: 'High',
        tools: ['Risk Assessment Models', 'Advanced Anonymization', 'Privacy Metrics'],
        codeExample: '// Calculate disclosure risk\nconst risk = calculateDisclosureRisk(record);\nif (risk > 0.18) {\n  applyAdditionalProtection(record);\n}'
      },
      {
        id: 7,
        attackId: 5,
        name: 'Attribute Disclosure',
        title: 'Prevent Attribute Linkage',
        description: 'Prevent linking specific attributes to individuals through background knowledge attacks.',
        implementation: 'Use techniques like t-closeness and differential privacy to prevent attribute disclosure.',
        priority: 'Critical',
        estimatedTime: '7-9 hours',
        difficulty: 'High',
        tools: ['Differential Privacy', 'Attribute Protection', 'Background Knowledge Analysis'],
        codeExample: '// Apply differential privacy\nconst differentialPrivacy = new DifferentialPrivacy({\n  epsilon: 0.1,\n  delta: 0.01\n});\nconst privateData = differentialPrivacy.protect(dataset);'
      },
      {
        id: 8,
        attackId: 6,
        name: 'Minimality Attack',
        title: 'Prevent Minimality Attacks',
        description: 'Ensure that suppression patterns do not reveal original values through minimality attacks.',
        implementation: 'Use balanced suppression strategies and avoid patterns that could reveal original data.',
        priority: 'Medium',
        estimatedTime: '4-6 hours',
        difficulty: 'Medium',
        tools: ['Suppression Analysis', 'Pattern Detection', 'Balanced Algorithms'],
        codeExample: '// Check for suppression patterns\nconst patterns = analyzeSuppressionPatterns(dataset);\nif (patterns.revealing) {\n  rebalanceSuppression(dataset);\n}'
      }
    ];

    setLocalSolutions(mockSolutions);
    setSolutionsGenerated(true);
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const groupSolutionsByAttack = (solutions) => {
    const grouped = {};
    solutions.forEach(solution => {
      if (!grouped[solution.attackName]) {
        grouped[solution.attackName] = [];
      }
      grouped[solution.attackName].push(solution);
    });
    return grouped;
  };

  // Use local solutions if available, otherwise use prop
  const solutionsToShow = localSolutions.length > 0 ? localSolutions : solutions;

  return (
    <div className="modern-card rounded-3xl p-12 mb-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <span className="text-3xl text-white">💡</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Raleway']">Solution Suggestions</h2>
        <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
          Recommended solutions and implementation strategies for detected cyber attacks
        </p>
      </div>

      {/* Generate Solutions Button */}
      {!solutionsGenerated && (
        <div className="text-center mb-12">
          <button
            onClick={generateSolutions}
            className="modern-btn px-12 py-5 text-xl font-['Manrope'] hover:scale-105"
          >
            🚀 Generate Solution Suggestions
          </button>
        </div>
      )}

      {/* Solutions Display */}
      {solutionsGenerated && solutionsToShow.length > 0 && (
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-['Raleway']">🛡️ Recommended Solutions</h3>
            <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
              {solutionsToShow.length} solutions generated for {detectedAttacks.length} detected attacks
            </p>
          </div>

          {/* Solutions by Attack */}
          {Object.entries(groupSolutionsByAttack(solutionsToShow)).map(([attackName, attackSolutions]) => (
            <div key={attackName} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h4 className="text-2xl font-semibold text-blue-600 mb-8 font-['Raleway']">{attackName}</h4>
              <div className="space-y-8">
                {attackSolutions.map((solution) => (
                  <div key={solution.id} className="bg-white rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <h5 className="text-2xl font-medium text-gray-800 mb-4 lg:mb-0 font-['Raleway']">{solution.title}</h5>
                      <div className="flex flex-wrap gap-3">
                        <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded-full ${getPriorityColor(solution.priority)}`}>
                          {solution.priority}
                        </span>
                        <span className="inline-flex px-4 py-2 text-sm font-semibold rounded-full bg-gray-200 text-gray-700">
                          {solution.estimatedTime}
                        </span>
                        <span className="inline-flex px-4 py-2 text-sm font-semibold rounded-full bg-gray-200 text-gray-700">
                          <span className={getDifficultyColor(solution.difficulty)}>{solution.difficulty}</span>
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg font-['Manrope'] leading-relaxed">{solution.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h6 className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide font-['Raleway']">Implementation:</h6>
                        <p className="text-gray-600 font-['Manrope'] leading-relaxed">{solution.implementation}</p>
                      </div>
                      <div>
                        <h6 className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide font-['Raleway']">Tools:</h6>
                        <div className="flex flex-wrap gap-3">
                          {solution.tools.map((tool, index) => (
                            <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-['Manrope']">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {solution.codeExample && (
                      <div className="bg-gray-900 rounded-xl p-6 mb-6">
                        <h6 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wide font-['Raleway']">Code Example:</h6>
                        <pre className="text-sm text-gray-300 overflow-x-auto font-['Manrope']">
                          <code>{solution.codeExample}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Proceed Button */}
          <div className="text-center">
            <button
              onClick={() => onSolutionSuggestions(solutionsToShow)}
              className="modern-btn px-12 py-5 text-xl font-['Manrope'] hover:scale-105"
            >
              🔧 Start Data Rectification
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionSuggestions;
