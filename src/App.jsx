import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import AttackSimulation from './components/AttackSimulation';
import SolutionSuggestions from './components/SolutionSuggestions';
import DataRectification from './components/DataRectification';
import ReportGeneration from './components/ReportGeneration';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<FileUpload />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/attack-simulation" element={<AttackSimulation />} />
          <Route path="/solutions" element={<SolutionSuggestions />} />
          <Route path="/rectification" element={<DataRectification />} />
          <Route path="/report" element={<ReportGeneration />} />
          <Route path="*" element={<Navigate to="/upload" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
