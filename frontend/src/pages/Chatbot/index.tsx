import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '../../components/ChatMessage/ChatMessage';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: "Hi Kien! 👋 I'm your Gemini AI energy advisor. I can help you with energy-saving tips, bill analysis, and personalized recommendations. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedPrompts = [
    'How can I save energy during hot months?',
    'Why is my bill higher this week?',
    'Give me a challenge to earn more tokens',
    'What appliances use the most energy?',
  ];

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('save') || lowerMessage.includes('hot month')) {
      return `🌡️ Great question! During hot months, air conditioning is your biggest energy consumer. Here are my recommendations:

1. **Set AC to 26-27°C** instead of 24°C (saves ~8% of AC energy)
2. **Use ceiling fans** to help distribute cool air
3. **Close blinds during the day** to reduce solar heat gain
4. **Schedule AC usage** - turn off during peak hours (12-4 PM)
5. **Regular maintenance** - clean filters monthly

💡 **Quick tip**: Running your AC 1 hour less daily could save you ₱300/month!

📊 Estimated savings: 15-20 kWh/month = 25 SIN tokens`;
    }

    if (lowerMessage.includes('bill') || lowerMessage.includes('higher') || lowerMessage.includes('why')) {
      return `📈 Looking at your recent bill data:

Your October bill (360 kWh) was 8% higher than September (330 kWh). This could be due to:

1. **Warmer weather** - AC usage typically increases by 5-10% in summer
2. **Additional appliance usage** - Check if you've had guests or extra loads
3. **Inefficient settings** - AC set too cold or running 24/7

📊 **Comparison with baseline**:
- Your baseline for October: 390 kWh
- Actual usage: 360 kWh
- ✅ You're still 8% better than baseline!

💰 **Cost breakdown**:
- AC: ~40% of bill
- Water heater: ~15%
- Refrigerator: ~12%
- Other appliances: ~33%

Want me to help optimize any specific appliance?`;
    }

    if (lowerMessage.includes('challenge') || lowerMessage.includes('earn') || lowerMessage.includes('token')) {
      return `🏆 **Challenge Unlocked: Carbon Warrior**

Cut your energy usage by **10% next month** and earn **2x token rewards**!

📌 **How to participate**:
1. Target usage: **310 kWh** (10% reduction from 345 kWh current)
2. Duration: November 1-30, 2025
3. Reward: 58 SIN tokens (double the normal rate) + "Carbon Hero" badge

🎯 **Suggested actions**:
- Reduce AC usage by 2 hours daily (-20 kWh)
- Switch to LED lighting (-5 kWh)
- Optimize refrigerator temperature (-8 kWh)
- Use power strips to eliminate phantom loads (-5 kWh)

Good luck! You've got this! 💪`;
    }

    if (lowerMessage.includes('appliance') || lowerMessage.includes('energy') || lowerMessage.includes('use')) {
      return `⚡ **Top Energy-Consuming Appliances in Your Home**

Based on typical Filipino households:

1. **Air Conditioner** - 45% of total usage (your biggest consumer!)
2. **Water Heater** - 15% (especially if electric)
3. **Refrigerator** - 12% (runs 24/7)
4. **Washing Machine** - 8% (varies by usage)
5. **Lighting** - 8% (more if incandescent)
6. **Others** - 12% (TV, microwave, etc.)

💡 **Quick wins**:
- Switch to inverter AC (saves 30-40%)
- Use LED bulbs (saves 75% vs incandescent)
- Unplug devices when not in use (saves 5-10%)

Next month, expect 5% higher usage due to summer season approaching. Want strategies to offset this?`;
    }

    return `I understand! That's a great question about your energy usage. 

📊 **What I can help you with:**
- Energy-saving tips personalized to your home
- Analysis of your bills and consumption patterns
- Predictive insights for upcoming months
- Challenges and rewards to earn Sinag tokens
- Appliance-specific recommendations

What would you like to focus on? You can ask me about specific appliances, your bill, or ways to earn more tokens! 🌱`;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: generateAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 800);
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-950">
      {/* Header */}
      <div className="p-4 border-b border-neutral-800 bg-neutral-900">
        <h1 className="text-xl font-semibold">Sinag Energy Advisor 🤖</h1>
        <p className="text-sm text-neutral-400">Powered by Gemini AI</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <p className="text-neutral-400">Start a conversation to get energy-saving tips!</p>
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <div className="flex gap-2 p-3 bg-neutral-900 rounded w-fit">
            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse delay-200" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts (show if no messages or on demand) */}
      {messages.length <= 1 && !isLoading && (
        <div className="px-4 py-3 border-t border-neutral-800">
          <p className="text-xs text-neutral-500 mb-2">Try asking:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSuggestedPrompt(prompt)}
                className="p-2 text-left text-xs bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 transition text-neutral-300"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-neutral-800 bg-neutral-900">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about energy savings, your bill, or challenges..."
            className="flex-1 p-3 bg-neutral-800 border border-neutral-700 rounded text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-700 rounded text-white font-medium transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
