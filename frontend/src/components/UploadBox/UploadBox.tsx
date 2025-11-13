import React, { useState } from 'react';
import { sinagContext } from '@/context/sinagContext';
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from '@/client';
import { mintTo } from 'thirdweb/extensions/erc20';
import { useActiveWallet, useSendTransaction } from 'thirdweb/react';

interface UploadBoxProps {
  onFileSelect?: (file: File) => void;
}

const UploadBox: React.FC<UploadBoxProps> = ({ onFileSelect }) => {

  const contract = getContract({
  client,
  chain: defineChain(11155111),
  address: "0x8cFeCD58d76074a81e679108129832F0Fd50238C",
  });

  const wallet = useActiveWallet();
  const { mutate: sendTransaction } = useSendTransaction();

  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const baseUrl = import.meta.env.VITE_BACKEND_URL ; // Example base URL
  const [res, setRes] = useState<any>(null);
  const { 
    update_Baseline, 
    update_currentUsage, 
    update_energySaved, 
    update_rate, 
    update_sinagTokens,
    update_History 
  } = React.useContext(sinagContext);

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

        // Update context with all the data from backend
        if (data && !data.error) {
          // Update individual metrics
          update_Baseline(data.baseline || 0);
          console.log(data.baseline);
          update_currentUsage(data.current_usage || 0);
          console.log(data.current_usage);
          update_energySaved(data.energy_saved || 0);
          console.log(data.energy_saved);
          update_rate(data.rate_this_month || 0);
          console.log(data.rate_this_month);
          update_sinagTokens(data.Token_reward || 0);
          console.log(data.Token_reward);

      //     // Request backend to mint SINAG tokens to user's wallet
      //     if (data.Token_reward && data.Token_reward > 0 && wallet) {
      //       const userAddress = wallet.getAccount()?.address;
            
      //       if (userAddress) {
      //         try {
      //           const mintResponse = await fetch(`${baseUrl}/mint-tokens`, {
      //             method: 'POST',
      //             headers: {
      //               'Content-Type': 'application/json',
      //             },
      //             body: JSON.stringify({
      //               address: userAddress,
      //               amount: data.Token_reward,
      //             }),
      //           });

      //           if (mintResponse.ok) {
      //             const mintData = await mintResponse.json();
      //             console.log('✅ Tokens minted successfully:', mintData);
      //             alert(`🎉 You've earned ${data.Token_reward} SINAG tokens!`);
      //           } else {
      //             const errorText = await mintResponse.text();
      //             console.error('Error minting tokens:', errorText);
      //             alert(`Error receiving tokens: ${errorText}`);
      //           }
      //         } catch (mintError: any) {
      //           console.error('Mint request failed:', mintError);
      //           alert(`Failed to mint tokens: ${mintError.message}`);
      //         }
      //       } else {
      //         alert('Please connect your wallet to receive tokens');
      //       }
      //     }

      //     // Update history if available
      //     if (data.history && Array.isArray(data.history)) {
      //       update_History(data.history);
      //     }
      //   }
      // } catch (error: any) {
      //   console.error('OCR Error:', error);
      //   alert(`Token Limit Reached. Please try again later.`);
      //   setRes({ error: error.message });
      // }
        }
      } catch (error: any) {
        console.error('OCR Error:', error);
        alert(`error occurred during OCR processing.`);
        setRes({ error: error.message });
      }
    };
  }

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
