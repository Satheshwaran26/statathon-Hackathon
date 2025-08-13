import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = [
    'File Upload',
    'Attack Simulation',
    'Solution Suggestions',
    'Data Rectification',
    'Report Generation',
    'View Report',
    'Complete'
  ];

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              index + 1 < currentStep
                ? 'bg-green-500 text-white'
                : index + 1 === currentStep
                ? 'bg-blue-600 text-white ring-4 ring-blue-200'
                : 'bg-gray-300 text-gray-600'
            }`}>
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            <span className={`text-xs mt-3 text-center max-w-24 font-medium ${
              index + 1 <= currentStep ? 'text-gray-800' : 'text-gray-500'
            }`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Current Step Display */}
      <div className="text-center mt-6">
        <span className="text-lg font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
          Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
