"use client"

import { Shield, Lock, EyeOff, Smartphone } from "lucide-react"

const privacyFeatures = [
  {
    icon: Shield,
    title: "On-Device Only",
    description: "All your data stays on your phone. We never upload it to any server."
  },
  {
    icon: Lock,
    title: "No Data Selling",
    description: "We don't sell your information to advertisers or third parties."
  },
  {
    icon: EyeOff,
    title: "No Tracking",
    description: "We don't track your behavior or monitor how you use the app."
  },
  {
    icon: Smartphone,
    title: "Private Journal",
    description: "Your journal entries are yours alone. Even we can't read them."
  }
]

export function Privacy() {
  return (
    <section id="privacy" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Main message */}
          <div>
            <p className="text-primary font-bold text-xs sm:text-sm uppercase mb-2 tracking-widest">Privacy First</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Your data is yours.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empath was built with privacy at its core. We don&apos;t track you, we don&apos;t sell your data, and we don&apos;t even have access to your journal entries. Everything stays on your device.
            </p>
          </div>

          {/* Right side - Privacy features grid */}
          <div className="grid grid-cols-2 gap-4">
            {privacyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
