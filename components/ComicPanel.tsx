import React from 'react';

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  halftone?: boolean;
}

export default function ComicPanel({ children, className = '', halftone = false }: ComicPanelProps) {
  return (
    <div className={`comic-panel ${halftone ? 'halftone-overlay' : ''} ${className}`}>
      {children}
    </div>
  );
}
