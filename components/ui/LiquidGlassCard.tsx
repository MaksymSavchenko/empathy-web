"use client";

import React, { useState, useRef } from 'react';

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const LiquidGlassCard = ({ children, className = '' }: LiquidGlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl transition-all duration-500 ease-out ${className}`}
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
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
        style={{
          background: isHovering 
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147,51,234,0.15), transparent 40%)`
            : 'none',
          opacity: isHovering ? 1 : 0,
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LiquidGlassCard;
