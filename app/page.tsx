"use client";

import React, { useState, useRef } from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Settings, 
  Home, 
  ChevronRight, 
  Smile, 
  RefreshCcw, 
  Wind
} from 'lucide-react';

// Liquid Glass Card Component with mouse-tracking spotlight
const LiquidGlassCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
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
      {/* Glass shine effect following cursor */}
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
      
      {/* Inner gradient border glow */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
        style={{
          background: isHovering 
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147,51,234,0.15), transparent 40%)`
            : 'none',
          opacity: isHovering ? 1 : 0,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Logo Component matching the new design
const Logo = ({ size = 32, pulsing = false }) => {
  return (
    <div className={`relative flex items-center justify-center ${pulsing ? 'animate-pulse' : ''}`} style={{ width: size, height: size }}>
      {/* Outer ring */}
      <div 
        className="absolute rounded-full bg-purple-600/30"
        style={{ width: size, height: size }}
      />
      {/* Inner circle */}
      <div 
        className="absolute rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)]"
        style={{ width: size * 0.65, height: size * 0.65 }}
      />
    </div>
  );
};

// Reusable Card Component with Liquid Glass effect
const FeatureCard = ({ title, desc, icon: Icon, color }: { title: string; desc: string; icon: React.ComponentType<{ size?: number; className?: string }>; color: string }) => (
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

const App = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white font-sans selection:bg-purple-500/30">
      
      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Logo size={32} pulsing={false} />
          <span className="text-xl font-bold tracking-tight">Empath</span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#library" className="hover:text-white transition-colors">Library</a>
          <a href="#news" className="hover:text-white transition-colors">Latest news</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
          Download Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-20 max-w-7xl mx-auto text-center md:text-left md:flex md:items-center md:gap-12">
        <div className="md:flex-1">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Your Support Space</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Mental wellness, <br />
            <span className="text-purple-500 italic">simplified.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Everything here is private and stays on your device. Check in, reframe thoughts, and explore guided tools designed for your mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center bg-[#1c1c1e] border border-white/10 px-4 py-2 rounded-2xl hover:bg-[#2c2c2e] transition-all">
              <img src="/iOS_store.svg" className="h-12 w-auto" alt="Download on the App Store" />
            </button>
            <button className="flex items-center justify-center bg-[#1c1c1e] border border-white/10 px-4 py-2 rounded-2xl hover:bg-[#2c2c2e] transition-all">
              <img src="/android_play.svg" className="h-12 w-auto" alt="Get it on Google Play" />
            </button>
          </div>
        </div>

        {/* Pulsing Logo Mockup - 5x slower animation */}
        <div className="hidden md:flex flex-1 justify-center items-center relative">
            <div className="w-64 h-64 bg-purple-600/20 rounded-full absolute" style={{ animation: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
            <div className="w-48 h-48 bg-purple-600/40 rounded-full absolute" style={{ animation: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
            <div className="w-32 h-32 bg-purple-600 rounded-full shadow-[0_0_50px_rgba(147,51,234,0.6)]" />
        </div>
      </section>

      {/* App Screenshot Grid - Emulating "For Today" section */}
      <section id="features" className="px-6 py-20 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Powerful Tools at Your Fingertips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              title="Check In" 
              desc="Name how you're feeling and build daily self-awareness." 
              icon={Smile} 
              color="bg-purple-600" 
            />
            <FeatureCard 
              title="Reframe" 
              desc="A structured 7-step process to unpack unhelpful thinking." 
              icon={RefreshCcw} 
              color="bg-emerald-600" 
            />
            <FeatureCard 
              title="Library" 
              desc="Access 50+ evidence-based grounding and breathing exercises." 
              icon={BookOpen} 
              color="bg-orange-600" 
            />
            <FeatureCard 
              title="Journal" 
              desc="Reflect on your journey with a secure, private daily mood log." 
              icon={MessageSquare} 
              color="bg-purple-400" 
            />
          </div>
        </div>
      </section>

      {/* Library Highlights */}
      <section id="library" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-purple-400 font-bold text-sm uppercase mb-2 tracking-widest">Explore Tools</p>
            <h2 className="text-4xl font-bold">Featured in Library</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-600 p-8 rounded-[2rem] min-h-[300px] flex flex-col justify-end group cursor-pointer overflow-hidden relative">
            <Wind className="absolute top-10 right-10 opacity-20 group-hover:scale-125 transition-transform" size={120} />
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">Grounding · 3 min</span>
            <h3 className="text-3xl font-bold leading-tight">5-4-3-2-1 Grounding <br/>Technique</h3>
            <ChevronRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="grid grid-cols-1 gap-4">
             <LiquidGlassCard className="p-6 flex items-center justify-between cursor-pointer">
                <div>
                    <p className="text-xs font-bold text-red-400 uppercase mb-1">Stress</p>
                    <h4 className="text-xl font-bold">Box Breathing Reset</h4>
                </div>
                <ChevronRight size={20} className="text-gray-600" />
             </LiquidGlassCard>
             <LiquidGlassCard className="p-6 flex items-center justify-between cursor-pointer">
                <div>
                    <p className="text-xs font-bold text-blue-400 uppercase mb-1">Self-Criticism</p>
                    <h4 className="text-xl font-bold">The Perfectionism Trap</h4>
                </div>
                <ChevronRight size={20} className="text-gray-600" />
             </LiquidGlassCard>
             <LiquidGlassCard className="p-6 flex items-center justify-between cursor-pointer">
                <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase mb-1">Sleep</p>
                    <h4 className="text-xl font-bold">Wind Down for Better Sleep</h4>
                </div>
                <ChevronRight size={20} className="text-gray-600" />
             </LiquidGlassCard>
          </div>
        </div>
      </section>

      {/* Privacy Message */}
      <section id="privacy" className="px-8 py-10 bg-[#1c1c1e] max-w-7xl mx-auto rounded-[2rem] mb-16">
        <div className="flex items-center gap-6">
          <Logo size={64} pulsing={false} />
          <div>
            <h2 className="text-2xl font-bold mb-2">Your data is yours.</h2>
            <p className="text-gray-400 text-base">
              Empath was built with privacy at its core. We don't track you, we don't sell your data, and we don't even have access to your journal entries. Everything stays on your device.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-purple-400 font-bold text-sm uppercase mb-2 tracking-widest">Mental Health & AI</p>
          <h2 className="text-4xl font-bold">Latest News & Research</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LiquidGlassCard className="p-6 cursor-pointer group">
            <a href="https://www.apa.org/monitor/2026/01-02/trends-personalized-mental-health-care" target="_blank" rel="noopener noreferrer" className="block">
              <p className="text-xs font-bold text-green-400 uppercase mb-3">Clinical Trial</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">AI Chatbot Cuts Depression & Anxiety</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Therabot trial shows 51% reduction in depression symptoms and 31% in anxiety after 8 weeks of use.</p>
              <ChevronRight className="mt-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </a>
          </LiquidGlassCard>
          
          <LiquidGlassCard className="p-6 cursor-pointer group">
            <a href="https://www.cincinnati.com/press-release/story/41082/study-finds-51-use-mental-health-language-23-turn-to-ai-for-emotional-support/" target="_blank" rel="noopener noreferrer" className="block">
              <p className="text-xs font-bold text-blue-400 uppercase mb-3">Survey 2026</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Mental Health Language Goes Mainstream</h3>
              <p className="text-gray-400 text-sm leading-relaxed">51% of Americans now use mental health terms daily; 23% turn to AI chatbots for emotional support.</p>
              <ChevronRight className="mt-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </a>
          </LiquidGlassCard>
          
          <LiquidGlassCard className="p-6 cursor-pointer group">
            <a href="https://www.sciencedaily.com/releases/2026/03/260302030642.htm" target="_blank" rel="noopener noreferrer" className="block">
              <p className="text-xs font-bold text-red-400 uppercase mb-3">Ethics Alert</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">AI "Therapy" Chatbots Risky</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Brown University study identifies 15 risk categories including "deceptive empathy" and poor crisis handling.</p>
              <ChevronRight className="mt-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </a>
          </LiquidGlassCard>
          
          <LiquidGlassCard className="p-6 cursor-pointer group">
            <a href="https://news.utdallas.edu/health-medicine/study-chatbots-in-mental-health-study-2026/" target="_blank" rel="noopener noreferrer" className="block">
              <p className="text-xs font-bold text-yellow-400 uppercase mb-3">Trust Study</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">People Distrust AI Mental Health Bots</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Study finds participants trust "human" versions more even when responses are identical.</p>
              <ChevronRight className="mt-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </a>
          </LiquidGlassCard>
          
          <LiquidGlassCard className="p-6 cursor-pointer group">
            <a href="https://www.npr.org/2026/04/07/nx-s1-5771707/mental-health-care-workforce-artificial-intelligence-ai" target="_blank" rel="noopener noreferrer" className="block">
              <p className="text-xs font-bold text-orange-400 uppercase mb-3">Workforce</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">AI Anxiety in Mental Health Workforce</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Clinicians fear job displacement as AI tools are adopted for notes, scheduling, and triage.</p>
              <ChevronRight className="mt-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </a>
          </LiquidGlassCard>
          
          <LiquidGlassCard className="p-6 cursor-pointer group">
            <a href="https://www.digitalmentalhealth2026.org" target="_blank" rel="noopener noreferrer" className="block">
              <p className="text-xs font-bold text-purple-400 uppercase mb-3">Conference</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Digital Mental Health Conferences 2026</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Major conferences focus on real-world AI implementation, ethics, and digital biomarkers from wearables.</p>
              <ChevronRight className="mt-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </a>
          </LiquidGlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p className="mb-4">© 2026 Empath Project. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </footer>

      {/* Mobile Navigation (Floating) - Matches Screenshot Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 bg-[#1c1c1e]/90 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-around px-4 z-50 shadow-2xl">
        <div className="flex flex-col items-center gap-1 text-purple-500">
          <Home size={20} />
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-500">
          <div className="w-5 h-5 rounded-full bg-purple-600/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
          </div>
          <span className="text-[10px] font-bold">Companion</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-500">
          <BookOpen size={20} />
          <span className="text-[10px] font-bold">Library</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-500">
          <MessageSquare size={20} />
          <span className="text-[10px] font-bold">Journal</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-500">
          <Settings size={20} />
          <span className="text-[10px] font-bold">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default App;