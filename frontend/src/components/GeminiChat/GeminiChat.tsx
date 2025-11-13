import React from 'react';
import { useContext } from 'react';
import {sinagContext} from '@/context/sinagContext';

 

const GeminiChat: React.FC = () => {
  const { message, suggestion } = React.useContext(sinagContext);
  return (
    <div>
      <div className="space-y-3">
        <div className="p-3 bg-neutral-800 rounded">
          <div className="text-sm text-neutral-300">Quick suggestions</div>
          <ul className="mt-2 list-disc list-inside text-sm text-neutral-200">
            {suggestion}
          </ul>
        </div>

        <div className="p-3 bg-neutral-900 rounded border border-yellow-600/20">
          <div className="text-sm font-semibold text-yellow-400">Predictive alert</div>
          <div className="mt-2 text-sm text-neutral-300">{message}</div>
        </div>
      </div>

      {/* <div className="mt-4 p-3 bg-neutral-900 rounded">
        <div className="text-sm text-neutral-400">Gemini chat widget (placeholder)</div>
        <div className="mt-2">
          <input className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 text-sm" placeholder="Ask: 'How can I save energy during hot months?'" />
        </div>
      </div> */}
    </div>
  );
};

export default GeminiChat;
