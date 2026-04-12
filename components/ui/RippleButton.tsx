"use client";

import React, { useState, useRef } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const RippleButton = ({ children, onClick, className = '' }: RippleButtonProps) => {
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipplePosition({ x, y });
    
    setTimeout(() => setRipplePosition(null), 600);
    
    if (onClick) onClick();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {ripplePosition && (
        <span
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripplePosition.x,
            top: ripplePosition.y,
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 0.6s ease-out forwards'
          }}
        />
      )}
      {children}
    </button>
  );
};

export default RippleButton;
