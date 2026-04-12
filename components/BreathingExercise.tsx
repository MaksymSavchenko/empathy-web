"use client";

import React, { useState, useRef, useEffect } from 'react';

const BreathingExercise = () => {
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [totalTimeRemaining, setTotalTimeRemaining] = useState(20);
  const [isBreathing, setIsBreathing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  
  const phaseStartTimeRef = useRef<number>(0);
  const phaseRef = useRef<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const prevPhaseRef = useRef<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const outerCircle1Ref = useRef<HTMLDivElement>(null);
  const outerCircle2Ref = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isBreathingRef = useRef(false);
  const sessionStartTimeRef = useRef<number>(0);

  const setBreathingState = (state: boolean) => {
    isBreathingRef.current = state;
    setIsBreathing(state);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (!isBreathingRef.current) {
      setBreathingState(true);
      setPhase('inhale');
      phaseRef.current = 'inhale';
      prevPhaseRef.current = 'hold2';
      const now = Date.now();
      phaseStartTimeRef.current = now;
      sessionStartTimeRef.current = now;
      setTotalTimeRemaining(20);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isBreathingRef.current) {
      setBreathingState(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

  useEffect(() => {
    if (!isBreathing) {
      if (outerCircle1Ref.current) outerCircle1Ref.current.style.transform = 'scale(1)';
      if (outerCircle2Ref.current) outerCircle2Ref.current.style.transform = 'scale(1)';
      return;
    }

    const animate = () => {
      const now = Date.now();
      let elapsedInPhase = (now - phaseStartTimeRef.current) / 1000;
      
      const totalElapsedSeconds = Math.floor((now - sessionStartTimeRef.current) / 1000);
      const remainingSeconds = Math.max(0, 20 - totalElapsedSeconds);
      
      setTotalTimeRemaining((prev) => {
        if (remainingSeconds !== prev) {
           if (remainingSeconds === 0) {
             setBreathingState(false);
             if (!hasShownModal) {
               setHasShownModal(true);
               setShowCompletionModal(true);
             }
           }
           return remainingSeconds;
        }
        return prev;
      });

      if (!isBreathingRef.current) return;
      
      if (elapsedInPhase >= 4) {
        const phases: Array<'inhale' | 'hold1' | 'exhale' | 'hold2'> = ['inhale', 'hold1', 'exhale', 'hold2'];
        const currentIndex = phases.indexOf(phaseRef.current);
        const nextIndex = (currentIndex + 1) % 4;
        const nextPhase = phases[nextIndex];
        
        prevPhaseRef.current = phaseRef.current;
        phaseRef.current = nextPhase;
        phaseStartTimeRef.current = phaseStartTimeRef.current + 4000;
        setPhase(nextPhase);
        
        elapsedInPhase = (now - phaseStartTimeRef.current) / 1000;
      }

      const progress = Math.min(elapsedInPhase / 4, 1);
      const easedProgress = easeInOutSine(progress);
      let scale = 1;

      switch (phaseRef.current) {
        case 'inhale': 
          if (prevPhaseRef.current === 'hold2') {
            scale = 0.7 + (0.6 * easedProgress);
          } else {
            scale = 1 + (0.3 * easedProgress);
          }
          break;
        case 'hold1': 
          scale = 1.3;
          break;
        case 'exhale': 
          scale = 1.3 - (0.6 * easedProgress);
          break;
        case 'hold2': 
          scale = 0.7;
          break;
      }

      if (outerCircle1Ref.current) {
        outerCircle1Ref.current.style.transform = `scale(${scale})`;
      }
      if (outerCircle2Ref.current) {
        outerCircle2Ref.current.style.transform = `scale(${scale})`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isBreathing, hasShownModal]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Inhale';
      case 'hold1': return 'Hold';
      case 'exhale': return 'Exhale';
      case 'hold2': return 'Hold';
      default: return '';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCloseModal = () => {
    setShowCompletionModal(false);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('breath10');
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer focus:outline-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      role="button"
      aria-label="Box breathing exercise — hover or touch to begin"
      tabIndex={0}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {!isBreathing && (
        <>
          <div className="w-64 h-64 bg-purple-600/20 rounded-full absolute" style={{ animation: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
          <div className="w-48 h-48 bg-purple-600/40 rounded-full absolute" style={{ animation: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
        </>
      )}
      
      {isBreathing && (
        <>
          <div 
            ref={outerCircle1Ref}
            className="w-64 h-64 bg-purple-600/20 rounded-full absolute"
            style={{ transform: 'scale(1)' }}
          />
          <div 
            ref={outerCircle2Ref}
            className="w-48 h-48 bg-purple-600/40 rounded-full absolute"
            style={{ transform: 'scale(1)' }}
          />
        </>
      )}
      
      <div className="w-32 h-32 bg-purple-600 rounded-full shadow-[0_0_50px_rgba(147,51,234,0.6)]" />
      
      {isBreathing && (
        <div className="absolute w-32 h-32 flex flex-col items-center justify-center text-white pointer-events-none" aria-live="polite">
          <div className="text-2xl font-bold mb-1">{getPhaseText()}</div>
          <div className="text-sm mt-1 opacity-60" role="timer" aria-label="Time remaining">{formatTime(totalTimeRemaining)}</div>
        </div>
      )}

      {showCompletionModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 rounded-3xl p-8 max-w-md w-full mx-4 shadow-[0_0_60px_rgba(147,51,234,0.5)] border border-purple-500/30">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Well Done!</h2>
              <p className="text-white/80 text-lg mb-6">
                Thank you for completing your breathing exercise session
              </p>
              
              <div className="bg-black rounded-2xl p-6 border border-white/20">
                <p className="text-white/60 text-sm mb-3 text-center">Your discount code:</p>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 transition-all rounded-xl px-6 py-4 cursor-pointer group w-full mx-auto max-w-xs"
                  aria-label="Copy discount code"
                >
                  <span className="text-2xl font-bold text-white font-mono tracking-wider">breath10</span>
                  {copiedCode ? (
                    <span className="text-green-400 text-sm font-medium">Copied!</span>
                  ) : (
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreathingExercise;
