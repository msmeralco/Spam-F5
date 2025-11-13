import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TokenHistory from '../../components/TokenHistory/TokenHistory';
import RedeemModal from '../../components/RedeemModal/RedeemModal';

const Wallet: React.FC = () => {
  const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false);

  const tokenBalance = 75;
  const blockchainAddress = '0x742d35Cc6634C0532925a3b844Bc9e7595f42e0';
    
  return (
    <div className="max-w-7xl mx-auto">  
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Token Wallet</h1>
        <p className="text-sm text-neutral-400">Manage your SINAG tokens and redeem rewards</p>
      </section>

      {/* Token Balance Section */}
      <section className="mb-8 p-6 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border border-emerald-800/30 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-400 mb-2">Total Balance</p>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold text-emerald-400">{tokenBalance}</span>
              <span className="text-2xl text-neutral-400">SINAG</span>
            </div>
            <p className="text-xs text-neutral-500 mt-2">💰 Earned through energy savings & achievements</p>
          </div>

          <div className="space-y-3">
            <a
              href={`https://etherscan.io/address/${blockchainAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition text-center"
            >
              🔗 View on Blockchain Explorer
            </a>
            <div className="text-xs text-neutral-500 text-center break-all">
              Address: {blockchainAddress.slice(0, 10)}...{blockchainAddress.slice(-8)}
            </div>
          </div>
        </div>
      </section>

      {/* Token History Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
        <TokenHistory />
      </section>

      {/* Redeem Rewards Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Redeem Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Energy Bill Rebates */}
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-700 transition">
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
          </div>

          {/* Eco-friendly Products */}
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-700 transition">
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
          </div>

          {/* Partner Store Discounts */}
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded hover:border-neutral-700 transition">
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
      </section>

      {/* Redeem Modal */}
      {isRedeemModalOpen && (
        <RedeemModal onClose={() => setIsRedeemModalOpen(false)} tokenBalance={tokenBalance} />
      )}
    </div>
  );
};

export default Wallet;
