import React from 'react';
import Link from 'next/link';

interface CartoonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'gold';
  animate?: 'bounce' | 'wiggle' | 'pop' | 'shake' | 'none';
}

export default function CartoonButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  animate = 'none'
}: CartoonButtonProps) {
  const variantStyles = {
    primary: 'bg-cartoon-red',
    secondary: 'bg-cartoon-blue',
    gold: 'bg-cartoon-gold'
  };

  const animationClass = animate !== 'none' ? `animate-cartoon-${animate}` : '';

  const buttonClasses = `cartoon-button ${variantStyles[variant]} ${animationClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
