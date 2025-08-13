import React, { useState } from 'react';
import jsPDF from 'jspdf';

const ReportGeneration = ({ dataFile1, dataFile2, detectedAttacks, solutions, rectifiedData, onReportGeneration, report }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [localReport, setLocalReport] = useState(null);
  const [reportGenerated, setReportGenerated] = useState(false);

  // Generate comprehensive security report
  const generateReport = () => {
    setIsGenerating(true);
    
    // Simulate processing time
    setTimeout(() => {
      const securityReport = {
        title: 'Cyber Attack Simulation & Security Analysis Report',
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        uploadedFiles: {
          file1: dataFile1?.name || 'No file uploaded',
          file2: dataFile2?.name || 'No file uploaded'
        },
        detectedAttacks: detectedAttacks.length,
        solutions: solutions.length,
        rectificationSummary: `Successfully processed ${rectifiedData.length} malicious records with an average confidence of ${Math.round(rectifiedData.reduce((acc, item) => acc + item.confidence, 0) / rectifiedData.length)}%`,
        executiveSummary: 'This report presents a comprehensive analysis of cyber attack patterns detected in the provided datasets, along with recommended security solutions and data rectification results.',
        riskAssessment: {
          critical: detectedAttacks.filter(a => a.severity === 'Critical').length,
          high: detectedAttacks.filter(a => a.severity === 'High').length,
          medium: detectedAttacks.filter(a => a.severity === 'Medium').length,
          low: detectedAttacks.filter(a => a.severity === 'Low').length
        },
        recommendations: [
          'Implement all critical and high-priority security solutions immediately',
          'Establish regular security audits and penetration testing',
          'Deploy automated security monitoring and alerting systems',
          'Provide comprehensive security training for development teams',
          'Implement continuous security scanning in CI/CD pipelines'
        ],
        nextSteps: [
          'Review and approve recommended security solutions',
          'Allocate resources for security implementation',
          'Establish security metrics and monitoring dashboards',
          'Schedule follow-up security assessments',
          'Document security procedures and incident response plans'
        ]
      };

      setLocalReport(securityReport);
      setIsGenerating(false);
      setReportGenerated(true);
    }, 3000);
  };

  // Download report as PDF
  const downloadReportPDF = () => {
    const reportToDownload = localReport || report;
    if (!reportToDownload) return;

    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
      title: reportToDownload.title,
      subject: 'Cyber Security Analysis Report',
      author: 'Cyber Attack Simulation & Fixer',
      creator: 'Cyber Attack Simulation & Fixer'
    });

    // Add title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(reportToDownload.title, 20, 30);

    // Add date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated on: ${reportToDownload.date}`, 20, 45);

    // Add executive summary
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Executive Summary', 20, 65);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summaryLines = doc.splitTextToSize(reportToDownload.executiveSummary, 170);
    doc.text(summaryLines, 20, 75);

    // Add file information
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Uploaded Files', 20, 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Dataset 1: ${reportToDownload.uploadedFiles.file1}`, 20, 110);
    doc.text(`Dataset 2: ${reportToDownload.uploadedFiles.file2}`, 20, 120);

    // Add attack summary
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Security Analysis Results', 20, 140);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Total Attacks Detected: ${reportToDownload.detectedAttacks}`, 20, 150);
    doc.text(`Solutions Generated: ${reportToDownload.solutions}`, 20, 160);
    doc.text(`Records Processed: ${rectifiedData.length}`, 20, 170);

    // Add risk assessment
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Risk Assessment', 20, 190);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Critical: ${reportToDownload.riskAssessment.critical}`, 20, 200);
    doc.text(`High: ${reportToDownload.riskAssessment.high}`, 20, 210);
    doc.text(`Medium: ${reportToDownload.riskAssessment.medium}`, 20, 220);
    doc.text(`Low: ${reportToDownload.riskAssessment.low}`, 20, 230);

    // Add rectification summary
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Data Rectification Summary', 20, 250);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const rectificationLines = doc.splitTextToSize(reportToDownload.rectificationSummary, 170);
    doc.text(rectificationLines, 20, 260);

    // Add recommendations
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Key Recommendations', 20, 280);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    reportToDownload.recommendations.forEach((rec, index) => {
      doc.text(`• ${rec}`, 20, 290 + (index * 8));
    });

    // Add next steps
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Next Steps', 20, 350);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    reportToDownload.nextSteps.forEach((step, index) => {
      doc.text(`${index + 1}. ${step}`, 20, 360 + (index * 8));
    });

    // Add footer
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text('This report was generated by Cyber Attack Simulation & Fixer', 20, 280);

    // Save the PDF
    doc.save('cyber_security_report.pdf');
  };

  // Use local report if available, otherwise use prop
  const reportToShow = localReport || report;

  return (
    <div className="modern-card rounded-3xl p-12 mb-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <span className="text-3xl text-white">📊</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Raleway']">Report Generation</h2>
        <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
          Generate comprehensive security analysis report with recommendations and next steps
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-200 shadow-lg">
          <div className="text-4xl font-bold text-blue-600 font-['Raleway']">{detectedAttacks.length}</div>
          <div className="text-sm text-blue-700 font-medium font-['Manrope']">Attacks</div>
        </div>
        <div className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-200 shadow-lg">
          <div className="text-4xl font-bold text-purple-600 font-['Raleway']">{solutions.length}</div>
          <div className="text-sm text-purple-700 font-medium font-['Manrope']">Solutions</div>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200 shadow-lg">
          <div className="text-4xl font-bold text-green-600 font-['Raleway']">{rectifiedData.length}</div>
          <div className="text-sm text-green-700 font-medium font-['Manrope']">Records</div>
        </div>
        <div className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-200 shadow-lg">
          <div className="text-4xl font-bold text-orange-600 font-['Raleway']">
            {rectifiedData.length > 0 ? Math.round(rectifiedData.reduce((acc, item) => acc + item.confidence, 0) / rectifiedData.length) : '0'}%
          </div>
          <div className="text-sm text-orange-700 font-medium font-['Manrope']">Confidence</div>
        </div>
      </div>

      {/* Generate Report Button */}
      {!reportGenerated && (
        <div className="text-center mb-12">
          <button
            onClick={generateReport}
            disabled={isGenerating}
            className={`px-12 py-5 rounded-2xl font-semibold transition-all duration-300 transform text-xl font-['Manrope'] ${
              isGenerating
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'modern-btn hover:scale-105'
            }`}
          >
            {isGenerating ? (
              <div className="flex items-center space-x-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Generating Report...</span>
              </div>
            ) : (
              '📝 Generate Security Report'
            )}
          </button>
        </div>
      )}

      {/* Report Generation Progress */}
      {isGenerating && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 mb-12 border border-gray-200 shadow-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-500 mx-auto mb-8"></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-['Raleway']">Generating Comprehensive Security Report</h3>
            <div className="space-y-4 text-gray-600 font-['Manrope'] text-lg">
              <p>📋 Compiling security analysis data...</p>
              <p>🔍 Analyzing attack patterns and trends...</p>
              <p>💡 Generating security recommendations...</p>
              <p>📊 Creating risk assessment metrics...</p>
              <p>✅ Finalizing report structure...</p>
            </div>
          </div>
        </div>
      )}

      {/* Report Generated Success */}
      {reportGenerated && reportToShow && (
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-['Raleway']">✅ Security Report Generated</h3>
            <p className="text-gray-600 text-xl font-['Manrope'] leading-relaxed">
              Comprehensive security analysis report ready for review and download
            </p>
          </div>

          {/* Report Preview */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600 mb-6 font-['Raleway']">Report Overview</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-600 font-['Manrope']">Title:</span>
                  <p className="text-gray-800 font-medium font-['Manrope']">{reportToShow.title}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600 font-['Manrope']">Generated:</span>
                  <p className="text-gray-800 font-medium font-['Manrope']">{reportToShow.date}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600 font-['Manrope']">Files Analyzed:</span>
                  <p className="text-gray-800 font-medium font-['Manrope']">{reportToShow.uploadedFiles.file1}, {reportToShow.uploadedFiles.file2}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-600 font-['Manrope']">Attacks Detected:</span>
                  <p className="text-gray-800 font-medium font-['Manrope']">{reportToShow.detectedAttacks} attacks detected</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600 font-['Manrope']">Solutions Generated:</span>
                  <p className="text-gray-800 font-medium font-['Manrope']">{reportToShow.solutions} solutions implemented</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600 font-['Manrope']">Records Processed:</span>
                  <p className="text-gray-800 font-medium font-['Manrope']">{rectifiedData.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600 mb-6 font-['Raleway']">Risk Assessment Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-red-50 rounded-2xl p-6 text-center border border-red-200 shadow-lg">
                <div className="text-4xl font-bold text-red-600 font-['Raleway']">{reportToShow.riskAssessment.critical}</div>
                <div className="text-sm text-red-700 font-medium font-['Manrope']">Critical</div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-200 shadow-lg">
                <div className="text-4xl font-bold text-orange-600 font-['Raleway']">{reportToShow.riskAssessment.high}</div>
                <div className="text-sm text-orange-700 font-medium font-['Manrope']">High</div>
              </div>
              <div className="bg-yellow-50 rounded-2xl p-6 text-center border border-yellow-200 shadow-lg">
                <div className="text-4xl font-bold text-yellow-600 font-['Raleway']">{reportToShow.riskAssessment.medium}</div>
                <div className="text-sm text-yellow-700 font-medium font-['Manrope']">Medium</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200 shadow-lg">
                <div className="text-4xl font-bold text-green-600 font-['Raleway']">{reportToShow.riskAssessment.low}</div>
                <div className="text-sm text-green-700 font-medium font-['Manrope']">Low</div>
              </div>
            </div>
          </div>

          {/* Key Recommendations */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h4 className="text-2xl font-semibold text-blue-600 mb-6 font-['Raleway']">Key Recommendations</h4>
            <ul className="space-y-4">
              {reportToShow.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1 text-lg">•</span>
                  <span className="text-gray-700 font-['Manrope']">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={downloadReportPDF}
              className="px-12 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xl font-['Manrope']"
            >
              📥 Download Report (PDF)
            </button>
            <button
              onClick={() => onReportGeneration(reportToShow)}
              className="modern-btn px-12 py-5 text-xl font-['Manrope'] hover:scale-105"
            >
              👁️ View Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportGeneration;
