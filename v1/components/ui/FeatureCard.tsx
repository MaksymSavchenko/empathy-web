"use client";

import React from 'react';
import LiquidGlassCard from './LiquidGlassCard';

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

const FeatureCard = ({ title, desc, icon: Icon, color }: FeatureCardProps) => (
  <LiquidGlassCard className="p-6 flex flex-col gap-4 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} shadow-lg`}>
      <Icon size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mt-2">{desc}</p>
    </div>
  </LiquidGlassCard>
);

export default FeatureCard;
