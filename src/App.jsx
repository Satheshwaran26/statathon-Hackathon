import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/attack-simulation" element={<AttackSimulation />} />
          <Route path="/solutions" element={<SolutionSuggestions />} />
          <Route path="/rectification" element={<DataRectification />} />
          <Route path="/report" element={<ReportGeneration />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
