"use client"

import { Brain, Shield, Heart, BookOpen, Sparkles, Clock } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI Companion",
    description: "A private, on-device AI that helps you process thoughts and feelings without ever leaving your phone."
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "Your data never leaves your device. No cloud uploads, no tracking, just you and your wellness journey."
  },
  {
    icon: Heart,
    title: "Daily Check-ins",
    description: "Build self-awareness with gentle daily prompts that help you understand your emotional patterns."
  },
  {
    icon: BookOpen,
    title: "Guided Exercises",
    description: "Access grounding techniques, breathing exercises, and cognitive tools designed by mental health experts."
  },
  {
    icon: Brain,
    title: "Reframe Thoughts",
    description: "A structured process to work through difficult thoughts and find healthier perspectives."
  },
  {
    icon: Clock,
    title: "Quick Tools",
    description: "2-5 minute exercises for when you need immediate support during stressful moments."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features Designed for
            <span className="text-primary"> Your Wellbeing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every feature in Empath is thoughtfully crafted to support your mental health journey.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
