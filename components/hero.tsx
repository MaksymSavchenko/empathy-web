"use client"

import { Heart, Shield, Sparkles } from "lucide-react"
import { AppStoreButtons } from "./app-store-buttons"
import BreathingExercise from "./breathing-exercise"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Private & On-Device AI</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
          Your Wellness
          <br />
          <span className="text-primary">Companion</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
          Build self-awareness and emotional resilience with Empath. A private, on-device AI that helps you navigate your feelings and grow every day.
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Daily Check-ins</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">AI Companion</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">100% Private</span>
          </div>
        </div>

        {/* App Store Buttons */}
        <AppStoreButtons />
      </div>

      {/* Breathing Exercise */}
      <BreathingExercise />
    </section>
  )
}
