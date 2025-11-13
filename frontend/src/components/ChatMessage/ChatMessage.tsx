import React from 'react';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  // Simple markdown-like text processing (convert **text** to bold, etc.)
  const formatText = (text: string) => {
    return text.split('\n').map((line, lineIdx) => {
      // Handle bold **text**
      const parts = line.split(/(\*\*.*?\*\*)/);
      return (
        <div key={lineIdx} className="mb-1">
          {parts.map((part, idx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={idx}>{part.slice(2, -2)}</strong>
              );
            }
            return <span key={idx}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xl px-4 py-3 rounded-lg ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-neutral-900 text-neutral-200 border border-neutral-800'
        }`}
      >
        <div className="text-sm whitespace-pre-wrap break-words">
          {formatText(message.content)}
        </div>
        <div className={`text-xs mt-2 ${isUser ? 'text-blue-200' : 'text-neutral-500'}`}>
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
