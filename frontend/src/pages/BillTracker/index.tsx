import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UploadBox from '../../components/UploadBox/UploadBox';
import BillSummaryCards from '../../components/BillSummaryCards/BillSummaryCards';
import BaselineChart from '../../components/Charts/BaselineChart';
import LightRays from '@/components/LightRays';
import { Sparkles, Receipt, FileText, PieChart, Crown, Users, Zap, History } from "lucide-react";
import { useEffect } from 'react';
import Footer from '../../components/Footer'; 

const BillTracker: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    useEffect(() => {
      document.title = "Bill Manager | Sinag";
    }, []);
    
  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    console.log('File uploaded:', file.name);
    // TODO: trigger OCR extraction here
  };
    
  return (

    <>
      <section className="mb-8">
        {/* Glassmorphic Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-4 sm:mb-8 tracking-tight"
          style={{
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">Your Sinag Bill Manager</span>
        </div>

      {/* Header */}
        <h1 className="text-3xl font-semibold mb-2">Bill Management</h1>
        <p className="text-sm font-secondary text-neutral-400">Upload and view your historical Meralco bills. Our AI will automatically parse and analyze them.</p>
      </section>

      {/* Upload Area */}
      <section className="mb-8">
        <div className="flex items-center gap-2.5 mb-5">
          <Receipt className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
          <h2 className="text-lg font-semibold mb-0">Upload Your Bill</h2>
        </div>
        <div
          className="mx-auto px-4 sm:px-6 py-2 rounded-[16px] backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-4 sm:mb-8"
          style={{
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <UploadBox onFileSelect={handleFileUpload} />
          
          {uploadedFile && (
            <p className="mt-2 text-sm text-green-400 text-center">
              ✅ File selected: <strong>{uploadedFile.name}</strong>
            </p>
          )}
        </div>


      </section>

      {/* Bill Summary Cards */}
      <section className="mb-8">
        <div className="flex items-center gap-2.5 mb-5">
          <History className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
          <h2 className="text-lg font-semibold mb-0">Bill History</h2>
        </div>
        <BillSummaryCards />
      </section>

      {/* AI Baseline Chart */}
      <section>
        <div className="flex items-center gap-2.5 mb-5">
          <PieChart className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
          <h2 className="text-lg font-semibold mb-0">Consumption Analysis</h2>
        </div>
        <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
          <BaselineChart />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BillTracker;
