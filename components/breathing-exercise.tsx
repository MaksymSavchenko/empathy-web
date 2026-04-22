"use client";

import React, { useEffect, useRef, useState } from "react";

type BreathPhase = "inhale" | "hold1" | "exhale" | "hold2";

const PHASE_SEQUENCE: BreathPhase[] = ["inhale", "hold1", "exhale", "hold2"];
const PHASE_DURATION_MS = 4000;
const PHASE_COMPLETION_HOLD_MS = 120;
const PHASE_TRANSITION_BLEND_MS = 500;
const TOTAL_SESSION_SECONDS = 16;
const SVG_SIZE = 320;
const RING_RADIUS = 120;

const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

const getPhaseText = (phase: BreathPhase) => {
  switch (phase) {
    case "inhale":
      return "Breathe in";
    case "hold1":
      return "Hold";
    case "exhale":
      return "Breathe out";
    case "hold2":
      return "Hold";
    default:
      return "";
  }
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const polarToCartesian = (cx: number, cy: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (cx: number, cy: number, radius: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(cx, cy, radius, startAngle);
  const end = polarToCartesian(cx, cy, radius, endAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${start.x.toFixed(3)} ${start.y.toFixed(3)} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x.toFixed(3)} ${end.y.toFixed(3)}`;
};

const BreathingExercise = () => {
  const [phase, setPhase] = useState<BreathPhase>("inhale");
  const [stageProgress, setStageProgress] = useState(0);
  const [outgoingRingOpacity, setOutgoingRingOpacity] = useState(0);
  const [orbScale, setOrbScale] = useState(1);
  const [totalTimeRemaining, setTotalTimeRemaining] = useState(TOTAL_SESSION_SECONDS);
  const [isBreathing, setIsBreathing] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const animationFrameRef = useRef<number | null>(null);
  const isBreathingRef = useRef(false);
  const phaseRef = useRef<BreathPhase>("inhale");
  const phaseStartTimeRef = useRef(0);
  const phaseTransitionStartedAtRef = useRef<number | null>(null);
  const sessionStartTimeRef = useRef(0);
  const shouldFinishOnInhaleRef = useRef(false);

  const setBreathingState = (state: boolean) => {
    isBreathingRef.current = state;
    setIsBreathing(state);
  };

  const resetVisualState = () => {
    setPhase("inhale");
    setStageProgress(0);
    setOutgoingRingOpacity(0);
    setOrbScale(1);
    setTotalTimeRemaining(TOTAL_SESSION_SECONDS);
    phaseRef.current = "inhale";
    phaseTransitionStartedAtRef.current = null;
    shouldFinishOnInhaleRef.current = false;
  };

  const stopBreathingSession = () => {
    setBreathingState(false);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    resetVisualState();
  };

  const startBreathingSession = () => {
    if (isBreathingRef.current) {
      return;
    }

    const now = Date.now();
    phaseStartTimeRef.current = now;
    sessionStartTimeRef.current = now;
    phaseRef.current = "inhale";

    setPhase("inhale");
    setStageProgress(0.01);
    setOutgoingRingOpacity(0);
    setOrbScale(1);
    setTotalTimeRemaining(TOTAL_SESSION_SECONDS);
    shouldFinishOnInhaleRef.current = false;
    setBreathingState(true);
  };

  useEffect(() => {
    if (!isBreathing) {
      return;
    }

    const animate = () => {
      if (!isBreathingRef.current) {
        return;
      }

      const now = Date.now();
      const totalElapsedMs = now - sessionStartTimeRef.current;
      const remainingSeconds = Math.max(0, TOTAL_SESSION_SECONDS - Math.floor(totalElapsedMs / 1000));

      setTotalTimeRemaining((prev) => (prev === remainingSeconds ? prev : remainingSeconds));

      if (totalElapsedMs >= TOTAL_SESSION_SECONDS * 1000) {
        shouldFinishOnInhaleRef.current = true;
      }

      let elapsedInPhaseMs = now - phaseStartTimeRef.current;

      if (
        shouldFinishOnInhaleRef.current &&
        phaseRef.current === "inhale" &&
        elapsedInPhaseMs >= PHASE_DURATION_MS
      ) {
        setBreathingState(false);
        setPhase("inhale");
        setStageProgress(1);
        setOutgoingRingOpacity(0);
        setOrbScale(1.2);
        phaseTransitionStartedAtRef.current = null;

        if (!hasShownModal) {
          setHasShownModal(true);
          setShowCompletionModal(true);
        }

        animationFrameRef.current = null;
        return;
      }

      while (elapsedInPhaseMs >= PHASE_DURATION_MS + PHASE_COMPLETION_HOLD_MS) {
        const currentIndex = PHASE_SEQUENCE.indexOf(phaseRef.current);
        const nextPhase = PHASE_SEQUENCE[(currentIndex + 1) % PHASE_SEQUENCE.length];

        phaseRef.current = nextPhase;
        phaseStartTimeRef.current += PHASE_DURATION_MS + PHASE_COMPLETION_HOLD_MS;
        phaseTransitionStartedAtRef.current = now;
        setPhase(nextPhase);
        elapsedInPhaseMs = now - phaseStartTimeRef.current;
      }

      const progress = Math.min(elapsedInPhaseMs / PHASE_DURATION_MS, 1);
      const easedProgress = easeInOutSine(progress);

      let nextScale = 1;

      switch (phaseRef.current) {
        case "inhale":
          nextScale = 1 + 0.2 * easedProgress;
          break;
        case "hold1":
          nextScale = 1.2;
          break;
        case "exhale":
          nextScale = 1.2 - 0.2 * easedProgress;
          break;
        case "hold2":
          nextScale = 1;
          break;
      }

      let nextOutgoingRingOpacity = 0;

      if (phaseTransitionStartedAtRef.current !== null) {
        const transitionElapsedMs = now - phaseTransitionStartedAtRef.current;

        if (transitionElapsedMs < PHASE_TRANSITION_BLEND_MS) {
          const transitionProgress = transitionElapsedMs / PHASE_TRANSITION_BLEND_MS;
          nextOutgoingRingOpacity = 1 - easeInOutSine(transitionProgress);
        } else {
          phaseTransitionStartedAtRef.current = null;
        }
      }

      setStageProgress(progress);
      setOutgoingRingOpacity(nextOutgoingRingOpacity);
      setOrbScale(nextScale);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [hasShownModal, isBreathing]);

  const handleCloseModal = () => {
    setShowCompletionModal(false);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText("breath10");
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const isStageComplete = stageProgress >= 0.999;
  const startAngle = -90;
  const endAngle = startAngle + Math.min(stageProgress, 0.999) * 359.9;
  const arcStart = polarToCartesian(SVG_SIZE / 2, SVG_SIZE / 2, RING_RADIUS, startAngle);
  const arcEnd = polarToCartesian(SVG_SIZE / 2, SVG_SIZE / 2, RING_RADIUS, endAngle);
  const arcPath =
    stageProgress > 0.005 && !isStageComplete
      ? describeArc(SVG_SIZE / 2, SVG_SIZE / 2, RING_RADIUS, startAngle, endAngle)
      : "";

  return (
    <>
      <div className="relative z-20 mt-12 mb-1 flex flex-col items-center justify-center sm:mt-16 sm:mb-1">
        <button
          type="button"
          className="group flex flex-col items-center bg-transparent p-0 focus:outline-none"
          onMouseEnter={startBreathingSession}
          onMouseLeave={stopBreathingSession}
          onTouchStart={startBreathingSession}
          onTouchEnd={stopBreathingSession}
          onFocus={startBreathingSession}
          onBlur={stopBreathingSession}
          aria-label="Box breathing exercise. Hover or tap to begin."
        >
          <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[360px] sm:w-[360px]">
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(47,192,185,0.22)_0%,rgba(20,44,51,0.12)_45%,transparent_72%)] blur-3xl" />

            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
              aria-hidden="true"
            >
              <defs>
                <filter id="breathing-progress-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient
                  id="breathing-stage-gradient"
                  x1={arcStart.x}
                  y1={arcStart.y}
                  x2={arcEnd.x}
                  y2={arcEnd.y}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#3fe6de" stopOpacity="0.98" />
                  <stop offset="55%" stopColor="#3fe6de" stopOpacity="0.52" />
                  <stop offset="100%" stopColor="#3fe6de" stopOpacity="0.12" />
                </linearGradient>
              </defs>

              <circle
                cx={SVG_SIZE / 2}
                cy={SVG_SIZE / 2}
                r={RING_RADIUS}
                fill="none"
                stroke="rgba(25, 108, 113, 0.28)"
                strokeWidth="5"
              />

              {isStageComplete && (
                <circle
                  cx={SVG_SIZE / 2}
                  cy={SVG_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  stroke="#3fe6de"
                  strokeOpacity="0.96"
                  strokeWidth="6"
                  filter="url(#breathing-progress-glow)"
                />
              )}

              {outgoingRingOpacity > 0.001 && (
                <circle
                  cx={SVG_SIZE / 2}
                  cy={SVG_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  stroke="#3fe6de"
                  strokeOpacity={0.96 * outgoingRingOpacity}
                  strokeWidth="6"
                  filter="url(#breathing-progress-glow)"
                />
              )}

              {arcPath && (
                <path
                  d={arcPath}
                  fill="none"
                  stroke="url(#breathing-stage-gradient)"
                  strokeOpacity={1 - outgoingRingOpacity * 0.2}
                  strokeWidth="6"
                  strokeLinecap="round"
                  filter="url(#breathing-progress-glow)"
                />
              )}
            </svg>

            <div
              className="relative h-[176px] w-[176px] rounded-full border border-[#8de7e4]/35 transition-transform duration-150 will-change-transform sm:h-[200px] sm:w-[200px]"
              style={{
                transform: `scale(${orbScale})`,
                background:
                  "radial-gradient(circle at 34% 28%, rgba(163, 236, 230, 0.86) 0%, rgba(74, 176, 173, 0.92) 36%, rgba(31, 140, 142, 0.96) 72%, rgba(15, 88, 95, 0.98) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(138, 231, 226, 0.16) inset, 0 24px 80px rgba(35, 172, 168, 0.18), 0 0 70px rgba(35, 172, 168, 0.18)",
              }}
            />
          </div>

          <div className="pointer-events-none mt-3 text-center sm:mt-4">
            <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {getPhaseText(phase)}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.35em] text-white/40 sm:text-sm">
              {isBreathing ? formatTime(totalTimeRemaining) : "Hover or tap to begin"}
            </div>
          </div>
        </button>
      </div>

      {showCompletionModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm md:z-[9999]">
          <div className="relative mx-4 w-full max-w-md rounded-3xl p-8 rainbow-border">
            <div className="relative -m-8 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card p-8">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 cursor-pointer text-white/60 transition-colors hover:text-white"
                aria-label="Close modal"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center">
                <div className="mb-4">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="mb-2 text-3xl font-bold text-white">Well Done!</h2>
                <p className="mb-6 text-base text-white/70">
                  Thank you for completing your breathing exercise session
                </p>

                <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <p className="mb-3 text-center text-sm text-white/60">Your discount code:</p>
                  <button
                    onClick={handleCopyCode}
                    className="group mx-auto flex w-full max-w-xs cursor-pointer items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-4 shadow-lg shadow-primary/25 transition-all hover:from-primary/90 hover:to-accent/90"
                    aria-label="Copy discount code"
                  >
                    <span className="font-mono text-2xl font-bold tracking-wider text-white">breath10</span>
                    {copiedCode ? (
                      <span className="text-sm font-medium text-white">Copied!</span>
                    ) : (
                      <svg className="h-5 w-5 text-white/80 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BreathingExercise;
