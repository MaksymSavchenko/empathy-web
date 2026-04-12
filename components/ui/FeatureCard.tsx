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
  <LiquidGlassCard className="p-5 flex flex-col gap-3 cursor-pointer">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
      <Icon size={22} className="text-white" />
    </div>
    <div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </LiquidGlassCard>
);

export default FeatureCard;
