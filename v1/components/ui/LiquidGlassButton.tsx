"use client";

import React, { useState, useRef } from 'react';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const LiquidGlassButton = ({ children, onClick, className = '' }: LiquidGlassButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 ease-out cursor-pointer ${className}`}
      style={{
        boxShadow: isHovering 
          ? '0 25px 50px -12px rgba(147, 51, 234, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
          : '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(147,51,234,0.1) 40%, transparent 70%)',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          opacity: isHovering ? 1 : 0,
          transform: 'translate3d(0,0,0)',
          filter: 'blur(40px)',
        }}
      />
      
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: isHovering 
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147,51,234,0.15), transparent 40%)`
            : 'none',
          opacity: isHovering ? 1 : 0,
        }}
      />
      
      {ripplePosition && (
        <span
          className="absolute bg-white/30 rounded-full animate-ping z-20"
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
      
      <div className="relative z-10">
        {children}
      </div>
    </button>
  );
};

export default LiquidGlassButton;
