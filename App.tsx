import React from 'react';
import { Hero } from './components/Hero';
import { ChatDemo } from './components/ChatDemo';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { Roadmap } from './components/Roadmap';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-primary selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
            LogIntel<span className="text-slate-500">AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#demo" className="hover:text-white transition-colors">Demo</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
          </div>
          <div className="hidden sm:block">
            {/* Placeholder for right side actions if needed later */}
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ChatDemo />
        <div id="features"><Features /></div>
        <Architecture />
        <TechStack />
        <div id="roadmap"><Roadmap /></div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;