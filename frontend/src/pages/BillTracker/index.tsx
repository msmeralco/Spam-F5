import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UploadBox from '../../components/UploadBox/UploadBox';
import BillSummaryCards from '../../components/BillSummaryCards/BillSummaryCards';
import BaselineChart from '../../components/Charts/BaselineChart';

const BillTracker: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    
  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    console.log('File uploaded:', file.name);
    // TODO: trigger OCR extraction here
  };
    
  return (
    
    <>
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Bill Management</h1>
        <p className="text-sm text-neutral-400">Upload and view your historical Meralco bills. Our AI will automatically parse and analyze them.</p>
      </section>

      {/* Upload Area */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Upload Your Bill</h2>
        <UploadBox onFileSelect={handleFileUpload} />
        {uploadedFile && (
          <p className="mt-2 text-sm text-green-400">✅ File selected: <strong>{uploadedFile.name}</strong></p>
        )}
      </section>

      {/* Bill Summary Cards */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Bill History</h2>
        <BillSummaryCards />
      </section>

      {/* AI Baseline Chart */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Consumption Analysis</h2>
        <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
          <BaselineChart />
        </div>
      </section>
    </>
  );
};

export default BillTracker;
