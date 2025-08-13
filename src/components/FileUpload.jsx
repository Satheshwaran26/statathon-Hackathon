import React, { useState, useRef } from 'react';

const FileUpload = ({ onFileUpload, dataFile1, dataFile2 }) => {
  const [file1, setFile1] = useState(dataFile1);
  const [file2, setFile2] = useState(dataFile2);
  const [dragActive1, setDragActive1] = useState(false);
  const [dragActive2, setDragActive2] = useState(false);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleDrag = (e, setDragActive) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e, setFile, setDragActive) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileInput = (e, setFile) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const validateFile = (file) => {
    const allowedTypes = ['text/csv', 'application/json', '.csv', '.json'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    
    if (!allowedTypes.includes(file.type) && !allowedTypes.includes(`.${fileExtension}`)) {
      alert('Please upload a valid CSV or JSON file.');
      return false;
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      alert('File size must be less than 10MB.');
      return false;
    }
    
    return true;
  };

  const handleSubmit = () => {
    if (file1 && file2) {
      onFileUpload(file1, file2);
    } else {
      alert('Please upload both files before proceeding.');
    }
  };

  const removeFile = (setFile) => {
    setFile(null);
  };

  const FileUploadArea = ({ file, setFile, dragActive, setDragActive, fileInputRef, label, fileNumber }) => (
    <div className="w-full">
      <label className="block text-lg font-semibold text-gray-700 mb-4 font-['Raleway']">
        {label}
      </label>
      <div
        className={`border-3 border-dashed rounded-2xl p-10 text-center transition-all duration-300 ${
          dragActive
            ? 'border-blue-400 bg-blue-50/50 shadow-lg'
            : file
            ? 'border-green-400 bg-green-50/50 shadow-lg'
            : 'border-gray-300 hover:border-gray-400 bg-white/80 hover:bg-white'
        }`}
        onDragEnter={(e) => handleDrag(e, setDragActive)}
        onDragLeave={(e) => handleDrag(e, setDragActive)}
        onDragOver={(e) => handleDrag(e, setDragActive)}
        onDrop={(e) => handleDrop(e, setFile, setDragActive)}
      >
        {file ? (
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✓</span>
              </div>
              <div>
                <span className="text-green-600 font-bold text-xl font-['Manrope']">{file.name}</span>
              </div>
            </div>
            <div className="text-gray-600 font-['Manrope']">
              Size: {(file.size / 1024 / 1024).toFixed(2)} MB
            </div>
            <button
              onClick={() => removeFile(setFile)}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl text-white text-sm transition-all duration-300 font-medium font-['Manrope'] hover:scale-105"
            >
              Remove File
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-8xl text-gray-300 mb-6">📁</div>
            <p className="text-gray-700 text-xl font-['Manrope'] leading-relaxed">
              Drag and drop your {fileNumber === 1 ? 'first' : 'second'} file here, or{' '}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-600 hover:text-blue-700 underline font-semibold font-['Raleway']"
              >
                browse
              </button>
            </p>
            <p className="text-gray-500 font-['Manrope']">
              Supports CSV and JSON files up to 10MB
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.json"
              onChange={(e) => handleFileInput(e, setFile)}
              className="hidden"
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="modern-card rounded-3xl p-12 mb-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <span className="text-3xl text-white">📁</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Raleway']">Upload Data Files</h2>
        <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
          Upload two datasets to analyze for cyber attack patterns
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <FileUploadArea
          file={file1}
          setFile={setFile1}
          dragActive={dragActive1}
          setDragActive={setDragActive1}
          fileInputRef={fileInputRef1}
          label="Data File 1"
          fileNumber={1}
        />
        
        <FileUploadArea
          file={file2}
          setFile={setFile2}
          dragActive={dragActive2}
          setDragActive={setDragActive2}
          fileInputRef={fileInputRef2}
          label="Data File 2"
          fileNumber={2}
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={!file1 || !file2}
          className={`px-12 py-5 rounded-2xl font-semibold transition-all duration-300 transform text-xl font-['Manrope'] ${
            file1 && file2
              ? 'modern-btn hover:scale-105'
              : 'bg-gray-400 text-gray-600 cursor-not-allowed'
          }`}
        >
          🚀 Proceed to Attack Simulation
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
