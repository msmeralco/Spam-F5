import React, { useState } from 'react';

interface RedeemModalProps {
  onClose: () => void;
  tokenBalance: number;
}

interface RewardOption {
  id: string;
  category: string;
  title: string;
  cost: number;
  description: string;
  icon: string;
}

const RedeemModal: React.FC<RedeemModalProps> = ({ onClose, tokenBalance }) => {
  const [selectedReward, setSelectedReward] = useState<RewardOption | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const rewards: RewardOption[] = [
    {
      id: '1',
      category: 'Bill Rebate',
      title: '5% Electricity Bill Discount',
      cost: 20,
      description: 'Get 5% off your next Meralco bill',
      icon: '💡',
    },
    {
      id: '2',
      category: 'Bill Rebate',
      title: '10% Electricity Bill Discount',
      cost: 40,
      description: 'Get 10% off your next Meralco bill',
      icon: '💡',
    },
    {
      id: '3',
      category: 'Bill Rebate',
      title: '15% Electricity Bill Discount',
      cost: 60,
      description: 'Get 15% off your next Meralco bill',
      icon: '💡',
    },
    {
      id: '4',
      category: 'Eco Product',
      title: 'LED Bulb Pack (10 pieces)',
      cost: 30,
      description: 'Energy-efficient LED bulbs for your home',
      icon: '🛒',
    },
    {
      id: '5',
      category: 'Eco Product',
      title: 'Smart Power Strip',
      cost: 50,
      description: 'Smart power strip to monitor energy usage',
      icon: '🛒',
    },
    {
      id: '6',
      category: 'Eco Product',
      title: 'Solar Charger',
      cost: 75,
      description: 'Portable solar charger for devices',
      icon: '🛒',
    },
    {
      id: '7',
      category: 'Partner Discount',
      title: 'SM Appliance 10% Off',
      cost: 25,
      description: 'Exclusive 10% discount on SM Appliance purchases',
      icon: '🎁',
    },
    {
      id: '8',
      category: 'Partner Discount',
      title: 'Lazada ₱500 Voucher',
      cost: 40,
      description: '₱500 discount voucher for Lazada',
      icon: '🎁',
    },
    {
      id: '9',
      category: 'Partner Discount',
      title: 'GCash ₱1,000 Credit',
      cost: 80,
      description: '₱1,000 credit to your GCash wallet',
      icon: '🎁',
    },
  ];

  const handleRedeem = () => {
    if (selectedReward && tokenBalance >= selectedReward.cost) {
      setIsConfirming(true);
      // Simulate redemption
      setTimeout(() => {
        alert(`✅ Successfully redeemed "${selectedReward.title}" for ${selectedReward.cost} SIN!`);
        setSelectedReward(null);
        setIsConfirming(false);
        onClose();
      }, 1000);
    }
  };

  const canRedeem = selectedReward && tokenBalance >= selectedReward.cost;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between sticky top-0 bg-neutral-900">
          <h2 className="text-2xl font-semibold">Redeem Rewards</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-200 transition text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Token Balance Info */}
          <div className="mb-6 p-4 bg-neutral-800/50 border border-neutral-700 rounded">
            <p className="text-sm text-neutral-400">Your available balance</p>
            <p className="text-2xl font-bold text-emerald-400">{tokenBalance} SINAG</p>
          </div>

          {/* Rewards Grid */}
          {!selectedReward ? (
            <div className="space-y-3">
              <p className="text-sm text-neutral-400 mb-4">Select a reward to redeem</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rewards.map((reward) => (
                  <button
                    key={reward.id}
                    onClick={() => setSelectedReward(reward)}
                    disabled={tokenBalance < reward.cost}
                    className={`p-4 rounded border transition text-left ${
                      tokenBalance >= reward.cost
                        ? 'bg-neutral-800 border-neutral-700 hover:border-neutral-600 hover:bg-neutral-700/50 cursor-pointer'
                        : 'bg-neutral-900 border-neutral-800 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-lg mb-2">{reward.icon}</div>
                    <h3 className="font-semibold text-sm mb-1">{reward.title}</h3>
                    <p className="text-xs text-neutral-400 mb-2">{reward.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">{reward.category}</span>
                      <span className={`font-bold ${tokenBalance >= reward.cost ? 'text-emerald-400' : 'text-neutral-500'}`}>
                        {reward.cost} SIN
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="space-y-4">
              <div className="p-4 bg-emerald-900/20 border border-emerald-800/30 rounded">
                <p className="text-sm text-neutral-400 mb-2">Selected Reward</p>
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{selectedReward.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{selectedReward.title}</h3>
                    <p className="text-sm text-neutral-400 mt-1">{selectedReward.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-800/50 border border-neutral-700 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400">Cost</span>
                  <span className="font-bold text-emerald-400">{selectedReward.cost} SIN</span>
                </div>
                <div className="border-t border-neutral-700 pt-2 flex items-center justify-between">
                  <span className="text-neutral-400">Your balance after</span>
                  <span className="font-bold text-neutral-200">{tokenBalance - selectedReward.cost} SIN</span>
                </div>
              </div>

              <div className="bg-neutral-800/30 border border-neutral-700/50 rounded p-3">
                <p className="text-xs text-neutral-400">
                  ✓ Your reward will be processed within 24 hours. You'll receive a confirmation email with details.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedReward(null)}
                  disabled={isConfirming}
                  className="flex-1 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 rounded text-white transition disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  onClick={handleRedeem}
                  disabled={!canRedeem || isConfirming}
                  className={`flex-1 px-4 py-3 rounded text-white font-medium transition ${
                    canRedeem && !isConfirming
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : 'bg-neutral-700 cursor-not-allowed opacity-50'
                  }`}
                >
                  {isConfirming ? 'Processing...' : `Confirm & Redeem`}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedeemModal;
