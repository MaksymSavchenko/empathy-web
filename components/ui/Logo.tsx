"use client";

import React from 'react';

interface LogoProps {
  size?: number;
  pulsing?: boolean;
}

const Logo = ({ size = 32, pulsing = false }: LogoProps) => {
  return (
    <div className={`relative flex items-center justify-center ${pulsing ? 'animate-pulse' : ''}`} style={{ width: size, height: size }}>
      <div 
        className="absolute rounded-full bg-purple-600/30"
        style={{ width: size, height: size }}
      />
      <div 
        className="absolute rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)]"
        style={{ width: size * 0.65, height: size * 0.65 }}
      />
    </div>
  );
};

export default Logo;
