"use client";

import React from 'react';
import { X } from 'lucide-react';
import LiquidGlassButton from './ui/LiquidGlassButton';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoreModal = ({ isOpen, onClose }: StoreModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-purple-900/95 to-purple-800/95 rounded-3xl p-8 max-w-md w-full mx-4 shadow-[0_0_60px_rgba(147,51,234,0.5)] border border-purple-500/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Download Empath</h2>
          <p className="text-white/70">Choose your preferred app store</p>
        </div>

        <div className="flex flex-col gap-4">
          <LiquidGlassButton
            onClick={() => window.open('https://apps.apple.com/app/placeholder', '_blank')}
            className="flex items-center justify-center px-4 py-3 !bg-black"
          >
            <img src="/iOS_store.svg" className="h-12 w-auto" alt="Download on the App Store" />
          </LiquidGlassButton>
          <LiquidGlassButton
            onClick={() => window.open('https://play.google.com/store/apps/details?id=placeholder', '_blank')}
            className="flex items-center justify-center px-4 py-3 !bg-black"
          >
            <img src="/android_play.svg" className="h-12 w-auto" alt="Get it on Google Play" />
          </LiquidGlassButton>
        </div>
      </div>
    </div>
  );
};

export default StoreModal;
