import React, { useState } from 'react';
import { base } from 'thirdweb/chains';

interface UploadBoxProps {
  onFileSelect?: (file: File) => void;
}

const UploadBox: React.FC<UploadBoxProps> = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const baseUrl = import.meta.env.VITE_BACKEND_URL ; // Example base URL
  const [res, setRes] = useState<any>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        setSelectedFile(file);
        onFileSelect?.(file);
      } else {
        alert('Please upload a PDF or image file (JPG, PNG)');
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleOCR = async() => {
    
    if (selectedFile) {
      try {
        console.log('Triggering OCR for:', selectedFile.name);
        const formData = new FormData();
        formData.append('file', selectedFile);
        
        const response = await fetch(`${baseUrl}/bot/extract`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server error (${response.status}): ${errorText}`);
        }

        const data = await response.json();
        console.log('OCR Response:', data);
        setRes(data);
      } catch (error: any) {
        console.error('OCR Error:', error);
        alert(`Token Limit Reached. Please try again later.`);
        setRes({ error: error.message });
      }
    }
  };

  return (
    <div
      className={`p-8 border-dashed border-2 rounded transition cursor-pointer ${
        isDragging
          ? 'border-blue-500 bg-blue-500/10'
          : selectedFile
          ? 'border-green-500 bg-green-500/10'
          : 'border-neutral-700 hover:border-neutral-600'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-center">
        <div className="text-3xl mb-2">📤</div>
        <p className="text-sm text-neutral-400 mb-2">
          {selectedFile ? `Selected: ${selectedFile.name}` : 'Drag & drop your Meralco bill here'}
        </p>
        <p className="text-xs text-neutral-500 mb-4">Accepts PDF or JPG/PNG images</p>

        <label className="inline-block mb-3">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileInput}
            className="hidden"
          />
          <span className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded text-sm text-white transition cursor-pointer inline-block">
            Browse Files
          </span>
        </label>

        {selectedFile && (
          <div className="mt-4">
            <button
              onClick={handleOCR}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm font-medium transition"
            >
              ✨ Extract & Analyze (OCR)
            </button>
            {res && (<div>
              <p className="mt-4 text-sm text-green-400">✅ OCR Extraction Complete!</p>
              <pre className="mt-2 p-4 bg-neutral-900 text-left text-xs rounded max-h-64 overflow-auto">
                {JSON.stringify(res, null, 2)}
              </pre>
            </div>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadBox;
