import React from 'react';

interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'speech' | 'thought';
}

export default function SpeechBubble({ children, className = '', variant = 'speech' }: SpeechBubbleProps) {
  if (variant === 'thought') {
    return (
      <div className={`thought-bubble ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`speech-bubble ${className}`}>
      {children}
    </div>
  );
}
