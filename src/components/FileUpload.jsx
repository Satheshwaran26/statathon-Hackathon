import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import groundTruthData from '../assets/Ground_Truth.json';
import microdataData from '../assets/Microdata.json';

const FileUpload = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState({ groundData: null, microData: null });
  const [dragActive, setDragActive] = useState({ groundData: false, microData: false });
  const [uploadProgress, setUploadProgress] = useState({ groundData: 0, microData: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const groundDataRef = useRef(null);
  const microDataRef = useRef(null);

  const handleFileInput = (e, fileType) => {
    const file = e.target.files[0];
    if (file && (file.type === 'text/csv' || file.type === 'application/json')) {
      // Simulate upload progress
      simulateUpload(fileType);
      setFiles(prev => ({ ...prev, [fileType]: file }));
    }
  };

  const simulateUpload = (fileType) => {
    setUploadProgress(prev => ({ ...prev, [fileType]: 0 }));
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev[fileType] >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [fileType]: prev[fileType] + Math.random() * 30 };
      });
    }, 100);
  };

  const handleDrag = (e, fileType) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(prev => ({ ...prev, [fileType]: true }));
    } else if (e.type === 'dragleave') {
      setDragActive(prev => ({ ...prev, [fileType]: false }));
    }
  };

  const handleDrop = (e, fileType) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [fileType]: false }));
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'text/csv' || file.type === 'application/json')) {
      simulateUpload(fileType);
      setFiles(prev => ({ ...prev, [fileType]: file }));
    }
  };

  const removeFile = (fileType) => {
    setFiles(prev => ({ ...prev, [fileType]: null }));
    setUploadProgress(prev => ({ ...prev, [fileType]: 0 }));
  };

  const handleProcess = async () => {
    if (files.groundData && files.microData) {
      setIsProcessing(true);
      
      // Simulate processing steps
      const steps = [
        'Analyzing file structure...',
        'Validating data format...',
        'Preparing for attack simulation...',
        'Initializing security protocols...',
        'Ready for analysis!'
      ];

      for (let i = 0; i < steps.length; i++) {
        setProcessingStep(steps[i]);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setIsProcessing(false);
      navigate('/attack-simulation');
    }
  };

  const handleDownloadSample = (fileType) => {
    let filename, content;
    
    if (fileType === 'groundData') {
      filename = 'Ground_Truth.json';
      content = JSON.stringify(groundTruthData, null, 2);
    } else {
      filename = 'Microdata.json';
      content = JSON.stringify(microdataData, null, 2);
    }

    const blob = new Blob([content], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleStraightUpload = () => {
    // Create file objects from the JSON data
    const groundDataFile = new File(
      [JSON.stringify(groundTruthData, null, 2)], 
      'Ground_Truth.json', 
      { type: 'application/json' }
    );
    
    const microDataFile = new File(
      [JSON.stringify(microdataData, null, 2)], 
      'Microdata.json', 
      { type: 'application/json' }
    );

    // Set the files in state
    setFiles({ groundData: groundDataFile, microData: microDataFile });
    
    // Simulate upload progress for both files
    simulateUpload('groundData');
    simulateUpload('microData');
  };

  const FileUploadArea = ({ fileType, title, description, icon }) => (
    <div
      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
        dragActive[fileType]
          ? 'border-gray-600 bg-gray-50 scale-105'
          : files[fileType]
          ? 'border-gray-800 bg-gray-50'
          : 'border-gray-300 bg-white hover:border-gray-400'
      }`}
      onDragEnter={(e) => handleDrag(e, fileType)}
      onDragLeave={(e) => handleDrag(e, fileType)}
      onDragOver={(e) => handleDrag(e, fileType)}
      onDrop={(e) => handleDrop(e, fileType)}
    >
      {files[fileType] ? (
        <div className="space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">✅</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{files[fileType].name}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {(files[fileType].size / 1024 / 1024).toFixed(2)} MB
            </p>
            
            {/* Upload Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-gray-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min(uploadProgress[fileType], 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              {uploadProgress[fileType] >= 100 ? 'Upload Complete!' : `Uploading... ${Math.round(uploadProgress[fileType])}%`}
            </p>
            
            <button
              onClick={() => removeFile(fileType)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Remove File
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl">{icon}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <div className="space-y-3">
              <button
                onClick={() => fileType === 'groundData' ? groundDataRef.current.click() : microDataRef.current.click()}
                className="w-full px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Choose File
              </button>
              <button
                onClick={() => handleDownloadSample(fileType)}
                className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-300"
              >
                📥 Download Sample {fileType === 'groundData' ? 'Ground Data' : 'Microdata'}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">or drag and drop here</p>
          </div>
        </div>
      )}
      
      <input
        ref={fileType === 'groundData' ? groundDataRef : microDataRef}
        type="file"
        accept=".csv,.json"
        onChange={(e) => handleFileInput(e, fileType)}
        className="hidden"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-8 border border-gray-200">
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2 animate-pulse"></span>
              Step 1: Data Upload
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-['Manrope']">
              Upload Your Data Files
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Begin your security journey by uploading your ground data and microdata files. 
              Our advanced algorithms will analyze and protect your sensitive information.
            </p>
          </div>

          {/* Sample Data Download Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Need Sample Data?</h2>
              <p className="text-gray-600">Test the system immediately with our sample datasets</p>
            </div>
            
            {/* Straight Upload Button */}
            <div className="text-center">
              <button
                onClick={handleStraightUpload}
                className="px-8 py-4 bg-gray-700 text-white rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-gray-600"
              >
                🚀 Straight Upload - Test with Sample Data
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Automatically upload both Ground Truth and Microdata files to start testing immediately
              </p>
            </div>
          </div>

          {/* File Upload Areas */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <FileUploadArea
              fileType="groundData"
              title="Ground Data"
              description="Upload your main dataset containing the primary information to be secured"
              icon="📊"
            />
            <FileUploadArea
              fileType="microData"
              title="Microdata"
              description="Upload your microdata file with additional context and metadata"
              icon="🔍"
            />
          </div>

          {/* Processing Animation */}
          {isProcessing && (
            <div className="text-center mb-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing Files...</h3>
                <p className="text-sm text-gray-600 mb-4">{processingStep}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-600 h-2 rounded-full transition-all duration-1000 ease-out animate-pulse"></div>
                </div>
              </div>
            </div>
          )}

          {/* Process Button */}
          <div className="text-center mb-16">
            <button
              onClick={handleProcess}
              disabled={!files.groundData || !files.microData || isProcessing}
              className={`px-16 py-5 rounded-2xl text-xl font-bold font-['Manrope'] transition-all duration-300 transform hover:scale-105 shadow-xl ${
                files.groundData && files.microData && !isProcessing
                  ? 'bg-gray-800 text-white hover:bg-gray-900'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </span>
              ) : (
                '🚀 Process & Start Attack Simulation'
              )}
            </button>
            <p className="text-sm text-gray-500 mt-4">
              {isProcessing ? 'Please wait while we process your files...' : 'Both files must be uploaded to proceed'}
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Supported Formats</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  CSV files (.csv)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  JSON files (.json)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Max size: 100MB
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Security Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Secure file processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Privacy compliance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Fast Processing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Real-time analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Instant results
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  Automated workflow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
