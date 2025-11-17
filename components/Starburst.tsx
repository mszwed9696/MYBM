import React from 'react';

interface StarburstProps {
  children: React.ReactNode;
  className?: string;
  color?: 'yellow' | 'red' | 'blue' | 'gold';
}

export default function Starburst({ children, className = '', color = 'yellow' }: StarburstProps) {
  const colorStyles = {
    yellow: 'bg-cartoon-yellow',
    red: 'bg-cartoon-red',
    blue: 'bg-cartoon-blue',
    gold: 'bg-cartoon-gold'
  };

  return (
    <div className={`starburst ${colorStyles[color]} ${className}`}>
      <div className="text-center font-cartoon font-black text-cartoon-ink uppercase">
        {children}
      </div>
    </div>
  );
}
