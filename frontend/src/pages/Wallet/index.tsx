import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TokenHistory from '../../components/TokenHistory/TokenHistory';
import RedeemModal from '../../components/RedeemModal/RedeemModal';
import { Sparkles, History } from 'lucide-react';
import { useEffect } from 'react';
import Footer from '../../components/Footer';

const Wallet: React.FC = () => {
    useEffect(() => {
      document.title = "Wallet | Sinag";
    }, []);

  const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false);

  const tokenBalance = 75;
  const blockchainAddress = '0x742d35Cc6634C0532925a3b844Bc9e7595f42e0';
    
  return (
    <div className="max-w-7xl mx-auto"> 

      {/* Glassmorphic Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-4 sm:mb-8 tracking-tight"
          style={{
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">Your Sinag Wallet</span>
        </div> 
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 text-4xl tracking-tight">Token Wallet</h1>
        <p className="text-sm text-neutral-400 font-secondary">Manage and save your Sinag tokens and redeem rewards.</p>
      </section>

      {/* Token Balance Section */}
          <section
            className="mb-8 p-6 rounded-[25px] tracking-tight"
            style={{
              background: "rgba(255, 255, 255, 0.05)", // light glass background
              backdropFilter: "blur(12px)",            // glass blur
              border: "1px solid rgba(255, 255, 255, 0.1)", // subtle border
              boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
            }}
          >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-400 mb-2 font-secondary">Total Balance</p>
            <div className="flex items-baseline gap-3">
          <span
            className="text-5xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #F77700 0%, #FE9126 75%)",
            }}
          >
            {tokenBalance}
          </span>
              <span className="text-2xl text-neutral-400 font-semibold">SINAG</span>
            </div>
            <p className="text-xs text-neutral-500 mt-2 font-secondary">Earned through energy savings & achievements</p>
          </div>

          <div className="space-y-3">
        <a
          href={`https://etherscan.io/address/${blockchainAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 sm:h-12 md:h-[45px] px-6 sm:px-8 bg-gradient-to-b from-sinag-orange-start to-sinag-orange-end hover:opacity-90 transition-opacity rounded-[50px] text-black font-medium text-sm sm:text-base shadow-lg shadow-sinag-orange-start/20 flex items-center justify-center"
        >
          View on Blockchain Explorer
        </a>
            <div className="text-xs text-neutral-500 text-center break-all">
              Address: {blockchainAddress.slice(0, 10)}...{blockchainAddress.slice(-8)}
            </div>
          </div>
        </div>
      </section>

      {/* Token History Section */}
      <section className="mb-8">
        <div className="flex items-center gap-2.5 mb-5">
          <History className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
          <h2 className="text-lg font-semibold mb-0">Transaction History</h2>
        </div>
        <TokenHistory />
      </section>

      {/* Redeem Rewards Section
      <section>
        <h2 className="text-lg font-semibold mb-4">Redeem Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Energy Bill Rebates */}
          {/* <div className="p-4 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-700 transition">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="font-semibold mb-2">Energy Bill Rebates</h3>
            <p className="text-sm text-neutral-400 mb-4">Get discounts on your next electricity bill</p>
            <div className="space-y-2 text-sm mb-4">
              <div>5% Rebate — 20 SIN</div>
              <div>10% Rebate — 40 SIN</div>
              <div>15% Rebate — 60 SIN</div>
            </div>
            <button
              onClick={() => setIsRedeemModalOpen(true)}
              className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded text-white text-sm font-medium transition"
            >
              Redeem
            </button>
          </div> */}

          {/* Eco-friendly Products */}
          {/* <div className="p-4 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-700 transition">
            <div className="text-2xl mb-2">🛒</div>
            <h3 className="font-semibold mb-2">Eco-friendly Products</h3>
            <p className="text-sm text-neutral-400 mb-4">Shop sustainable items with your tokens</p>
            <div className="space-y-2 text-sm mb-4">
              <div>LED Bulb Pack (10) — 30 SIN</div>
              <div>Smart Power Strip — 50 SIN</div>
              <div>Solar Charger — 75 SIN</div>
            </div>
            <button
              onClick={() => setIsRedeemModalOpen(true)}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm font-medium transition"
            >
              Redeem
            </button>
          </div> */}

          {/* Partner Store Discounts */}
          {/* <div className="p-4 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-700 transition">
            <div className="text-2xl mb-2">🎁</div>
            <h3 className="font-semibold mb-2">Partner Discounts</h3>
            <p className="text-sm text-neutral-400 mb-4">Exclusive deals from our partners</p>
            <div className="space-y-2 text-sm mb-4">
              <div>SM Appliance 10% off — 25 SIN</div>
              <div>Lazada ₱500 voucher — 40 SIN</div>
              <div>GCash ₱1000 credit — 80 SIN</div>
            </div>
            <button
              onClick={() => setIsRedeemModalOpen(true)}
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm font-medium transition"
            >
              Redeem
            </button>
          </div>
        </div>
      </section> */}

      {/* Redeem Modal */}
    {/* //   {isRedeemModalOpen && ( */}
    {/* //     <RedeemModal onClose={() => setIsRedeemModalOpen(false)} tokenBalance={tokenBalance} />
    //   )} */}
        <Footer />
    </div>
  ); 
};

export default Wallet;
