import React, { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import FileUpload from './components/FileUpload';
import AttackSimulation from './components/AttackSimulation';
import SolutionSuggestions from './components/SolutionSuggestions';
import DataRectification from './components/DataRectification';
import ReportGeneration from './components/ReportGeneration';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Landing, 1+ = App steps
  const [dataFile1, setDataFile1] = useState(null);
  const [dataFile2, setDataFile2] = useState(null);
  const [detectedAttacks, setDetectedAttacks] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [rectifiedData, setRectifiedData] = useState([]);
  const [report, setReport] = useState(null);
  const [showReport, setShowReport] = useState(false);

  const totalSteps = 7;

  const handleGetStarted = () => {
    setCurrentStep(1);
  };

  const handleHome = () => {
    setCurrentStep(0);
    // Reset all app state
    setDataFile1(null);
    setDataFile2(null);
    setDetectedAttacks([]);
    setSolutions([]);
    setRectifiedData([]);
    setReport(null);
    setShowReport(false);
  };

  const handleFileUpload = (file1, file2) => {
    setDataFile1(file1);
    setDataFile2(file2);
    setCurrentStep(2);
  };

  const handleAttackSimulation = (attacks) => {
    setDetectedAttacks(attacks);
    setCurrentStep(3);
  };

  const handleSolutionSuggestions = (sols) => {
    setSolutions(sols);
    setCurrentStep(4);
  };

  const handleDataRectification = (data) => {
    setRectifiedData(data);
    setCurrentStep(5);
  };

  const handleReportGeneration = (rep) => {
    setReport(rep);
    setCurrentStep(6);
  };

  const handleViewReport = () => {
    setShowReport(true);
    setCurrentStep(7);
  };

  const resetApp = () => {
    setCurrentStep(1);
    setDataFile1(null);
    setDataFile2(null);
    setDetectedAttacks([]);
    setSolutions([]);
    setRectifiedData([]);
    setReport(null);
    setShowReport(false);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 1:
        return (
          <FileUpload
            onFileUpload={handleFileUpload}
            dataFile1={dataFile1}
            dataFile2={dataFile2}
          />
        );
      case 2:
        return (
          <AttackSimulation
            dataFile1={dataFile1}
            dataFile2={dataFile2}
            onAttackSimulation={handleAttackSimulation}
            detectedAttacks={detectedAttacks}
          />
        );
      case 3:
        return (
          <SolutionSuggestions
            detectedAttacks={detectedAttacks}
            onSolutionSuggestions={handleSolutionSuggestions}
            solutions={solutions}
          />
        );
      case 4:
        return (
          <DataRectification
            detectedAttacks={detectedAttacks}
            solutions={solutions}
            onDataRectification={handleDataRectification}
            rectifiedData={rectifiedData}
          />
        );
      case 5:
        return (
          <ReportGeneration
            dataFile1={dataFile1}
            dataFile2={dataFile2}
            detectedAttacks={detectedAttacks}
            solutions={solutions}
            rectifiedData={rectifiedData}
            onReportGeneration={handleReportGeneration}
            report={report}
          />
        );
      case 6:
        return (
          <div className="modern-card rounded-3xl p-10 mb-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">✓</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Raleway']">Report Generated Successfully!</h2>
              <p className="text-gray-600 text-xl">
                Your comprehensive security analysis report is ready for review and download.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleViewReport}
                className="modern-btn px-8 py-4 text-lg"
              >
                👁️ View Report
              </button>
              <button
                onClick={() => setShowReport(false)}
                className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                📋 Hide Report
              </button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="modern-card rounded-3xl p-10 mb-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎉</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Raleway']">Process Complete!</h2>
              <p className="text-gray-600 text-xl">
                You have successfully completed the entire cyber attack simulation and rectification process.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Show landing page
  if (currentStep === 0) {
    return (
      <div className="min-h-screen">
        <Navigation onGetStarted={handleGetStarted} onHome={handleHome} />
        <LandingPage onGetStarted={handleGetStarted} />
        <Footer onGetStarted={handleGetStarted} onHome={handleHome} />
      </div>
    );
  }

  // Show main application
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation onGetStarted={handleGetStarted} onHome={handleHome} />
      
      <div className="container mx-auto px-6 py-12 pt-32">
        {/* Step Indicator - Only show after step 1 */}
        {currentStep > 1 && (
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
              <span className="text-sm font-medium text-gray-600 font-['Manrope']">Step {currentStep} of {totalSteps}</span>
              <div className="flex space-x-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i + 1 < currentStep
                        ? 'bg-green-500'
                        : i + 1 === currentStep
                        ? 'bg-blue-500'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {renderCurrentStep()}

          {/* Report Display */}
          {showReport && report && (
            <div className="modern-card rounded-3xl p-8 mb-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 max-h-96 overflow-y-auto border border-gray-100 shadow-inner">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 font-['Raleway']">{report.title}</h2>
                  <p className="text-gray-600 font-['Manrope']">Generated on: {report.date}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-['Raleway']">Uploaded Files</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 font-['Manrope']">
                      <li>Data File 1: {report.uploadedFiles.file1}</li>
                      <li>Data File 2: {report.uploadedFiles.file2}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-['Raleway']">Detected Attacks</h3>
                    <p className="text-gray-700 font-['Manrope']">{report.detectedAttacks} attacks detected</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-['Raleway']">Solutions Applied</h3>
                    <p className="text-gray-700 font-['Manrope']">{report.solutions} solutions implemented</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 font-['Raleway']">Rectification Summary</h3>
                    <p className="text-gray-700 font-['Manrope']">{report.rectificationSummary}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reset Button */}
          {currentStep > 1 && (
            <div className="text-center mt-12">
              <button
                onClick={resetApp}
                className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg font-['Manrope']"
              >
                🔄 Start Over
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer onGetStarted={handleGetStarted} onHome={handleHome} />
    </div>
  );
}

export default App;
